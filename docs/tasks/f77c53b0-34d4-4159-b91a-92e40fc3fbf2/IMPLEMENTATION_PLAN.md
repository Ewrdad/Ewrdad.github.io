# Implementation Plan: Mobile Responsiveness & UX Polish

## 1. Objective & Scope

Make the portfolio site (`ewrdad-github-io`) work cleanly and feel polished on mobile devices (360px–767px) without regressing tablet (768px–1023px) or desktop (1024px+) layouts.

This plan follows the principle of **"make the change easy, then make the change"**:
1. Establish baseline verification and tooling first.
2. Refactor duplicated layout markup and hash-scrolling logic into small, reusable, mobile-first primitives.
3. Apply targeted mobile fixes to the app shell, sidebar navigation, and each page cleanly on top of those primitives.
4. Verify with automated tests, headless viewport/overflow checks, and documentation updates.

> **Note on Task Assets:** The task references `assets/19227.png` and `idea-20261124-152939.md`, which were not present in this git worktree at planning time. This plan is grounded in a full audit of every source file in `src/` and `index.html`. If those files are present during implementation, cross-check the screenshot against the audit below before starting Phase 3.

> **Critical Build Hazard (`vite.config.js`):** `vite.config.js` sets `build.outDir = 'docs'` (for GitHub Pages). By default Vite empties `outDir` on `npm run build`, which would delete `docs/tasks/` if untracked or unguarded. During implementation, either preserve `docs/tasks/` after builds (e.g., check `git status` / avoid wiping `docs/tasks/`) or guard the build step before committing.

---

## 2. Summary of Current Mobile Defects (Codebase Audit)

| Area | File(s) | Root Cause / Mobile Symptom |
|---|---|---|
| **App Shell & Width** | `src/App.jsx` | Outer wrapper uses `w-screen inline-block` (causes horizontal overflow & breaks flex sizing). Translucent overlay (`bg-slate-400/80`) lacks `min-h-screen w-full`, causing it to cut off partway down short pages. Content column hardcodes `w-3/4` on all screens, crushing mobile content into ~280px and leaving a 25% blank strip on the right, and uses invalid classes (`justify-Arou`, `items-left`). `bg-fixed` causes background zoom/jitter on mobile Safari/iOS. |
| **Mobile Top Bar** | `src/App.jsx` | Uses `w-screen h-10` (not sticky, invalid `w-100` class, tight touch target, no horizontal padding/gap). |
| **WIP Alert Banner** | `src/App.jsx`, `src/components/ui/button.jsx` | `Alert` has `m-10` (40px margin on all sides). Feedback `Button` inherits `whitespace-nowrap` with a long URL string (`Got feedback? Let me know! : https://forms.gle/...`), forcing horizontal overflow on narrow screens. |
| **Global Light-Mode CSS** | `src/index.css` | `@media (prefers-color-scheme: light) { button { background-color: #334155; } }` overrides transparent/ghost buttons (`SidebarTrigger`, `Toggle`, `AccordionTrigger`, `TabsTrigger`) with dark slate boxes. |
| **Mobile Sidebar Drawer** | `src/sidebar/sidebar.jsx`, `src/components/ui/sidebar.jsx` | Clicking any route in `AppSidebar` calls `navigate(...)` without calling `setOpenMobile(false)`, leaving the mobile `Sheet` drawer open over the new page. Duplicate `onClick` on Raytheon item. `SheetContent` hides the close button (`[&>button]:hidden`) and lacks an accessible `SheetTitle`. |
| **Home Page** | `src/pages/Home/Home.jsx` | Container uses `w-[83vw] min-w-full`. Toggle icons apply `text-8xl scale-[2] m-5` (conflicts with `Toggle`'s `[&_svg]:size-4` and visually overflows/clips). Expanded panels use `p-10 text-2xl` on mobile. |
| **Two-Column Entry Pages** | `Work.jsx`, `Edu.jsx`, `Certs.jsx`, `CPD.jsx`, `Activities.jsx` | All 5 pages duplicate the same horizontal `flex w-full justify-between` header with `w-3/4` (`text-6xl`) beside `w-1/4` (`text-3xl`). On mobile, huge headings collide with narrow right-hand metadata columns and clip off-screen. `Work.jsx` line 70 also leaves the vertical `Separator` visible on mobile. |
| **Hash Scrolling** | `Work.jsx`, `Edu.jsx`, `Certs.jsx`, `CPD.jsx`, `Activities.jsx`, `Projects.jsx` | 6 identical copies of `scrollToHash` `useEffect`. With a sticky mobile header, `scrollIntoView` scrolls headings behind the header unless `scroll-mt-*` is applied. |
| **Projects Page** | `Projects.jsx`, `Portfolio.jsx`, `JsUseDocs.jsx`, `JsUseDocsTools.jsx`, `LiveQuery.jsx` | `Projects.jsx` uses `min-w-max w-[60vw] max-w-[60vw]`. Sub-components hardcode `w-[60vw]` / `max-w-[60vw]`, side-by-side `text-6xl` + `text-3xl w-1/4` inside `AccordionTrigger`, and `LiveQuery.jsx` adds `w-max` and `overflow-y-scroll`. |
| **Resources Page** | `Resources.jsx`, `Recomended.jsx`, `Self.jsx` | `Tabs` hardcodes `w-[60vw]`. YouTube `<iframe>` hardcodes `width="560" height="315"` (overflows 375px viewports) and uses lowercase `allowfullscreen`. `Self.jsx` puts `m-1` on `w-full` buttons. |
| **Long Buttons & Media** | `Activities.jsx`, `CPD.jsx` | Mindhub `Button` text overflows due to `whitespace-nowrap`. `CPD.jsx` certificate images lack responsive sizing (`w-full h-auto`) and `RISKMNG01` lacks `alt` text. |

---

## 3. Step-by-Step Implementation Workflow

### Phase 1: Research, Baseline Audit & Tooling Setup (Do First)

1. **Install dependencies and establish baseline**
   - Run `npm ci` to install dependencies.
   - Check `eslint.config.js`: update `{ ignores: ['dist'] }` to `{ ignores: ['dist', 'docs'] }` so `npm run lint` lints source files rather than the compiled GitHub Pages bundle in `docs/assets/`.
   - Run `npm run lint` and record any pre-existing warnings/errors.

2. **Baseline mobile visual & overflow capture**
   - Review `assets/19227.png` (if available in the task environment) alongside live renders of all 8 routes (`/`, `/#/work`, `/#/certs`, `/#/cpd`, `/#/projects`, `/#/edu`, `/#/activities`, `/#/resources`) at key viewports:
     - Mobile small: `375×812` (iPhone SE/Mini)
     - Mobile standard: `390×844` (iPhone 14)
     - Tablet breakpoint boundary: `768×1024` (matches `MOBILE_BREAKPOINT = 768` in `src/hooks/use-mobile.jsx`)
     - Desktop: `1280×800`
   - Capture before-screenshots and measure `document.documentElement.scrollWidth > window.innerWidth` on every route to confirm every overflow source.

3. **Set up lightweight unit/component test harness**
   - The repo currently has no test runner (`package.json` has no `test:unit` script).
   - Add dev dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`.
   - Configure `vitest` in `vite.config.js` (or `vitest.config.js` with `environment: 'jsdom'` and `@` alias) and add `"test:unit": "vitest run"` to `package.json`.
   - Verify `npm run test:unit` executes cleanly before refactoring.

---

### Phase 2: Make the Change Easy — Shared Responsive Primitives & Hooks

Before editing individual pages, extract the repeated patterns so mobile responsiveness is implemented once and reused consistently.

1. **Extract `src/hooks/use-hash-scroll.js`**
   - Consolidate the duplicated `scrollToHash` `useEffect` (currently copy-pasted across `Work`, `Edu`, `Certs`, `CPD`, `Activities`, `Projects`).
   - Note that `src/main.jsx` uses `HashRouter` from `react-router`; read `location.hash` via `useLocation()` and scroll smoothly on mount and hash change.
   - Pair with `scroll-mt-20 md:scroll-mt-6` on anchored headings so hash jumps clear the sticky mobile header.

2. **Create `src/components/PageSection.jsx`**
   - Reusable layout component for all CV/profile entries (`Work`, `Edu`, `Certs`, `CPD`, `Activities`):
     - Props: `id`, `title`, `meta` (array of strings or ReactNode, e.g., organization, credential code, date range), `children`.
     - Mobile-first structure:
       - Outer wrapper: `p-4 sm:p-5 space-y-3`
       - Header: `flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-6`
       - Title (`<h1>` or `<h2>` with `id` and `scroll-mt-20 md:scroll-mt-6`): `text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight break-words md:w-3/4`
       - Vertical `Separator`: `hidden md:block bg-slate-800 w-0.5 self-stretch`
       - Metadata block: `flex flex-wrap gap-x-3 gap-y-1 text-base sm:text-lg md:flex-col md:text-2xl md:w-1/4 text-slate-900/90`
       - Body wrapper: `text-base sm:text-lg md:text-xl leading-relaxed space-y-4`
   - Adding this single component eliminates ~20 duplicated broken flex headers across 5 pages.

3. **Create `src/pages/projects/ProjectAccordionItem.jsx`**
   - Reusable mobile-first accordion item for all 4 project entries (`Portfolio`, `JsUseDocs`, `JsUseDocsTools`, `LiveQuery`):
     - Props: `id`, `title`, `stack` (array of technology strings), `children`.
     - Uses `w-full` (no `w-[60vw]`, `max-w-[60vw]`, `min-w-max`, or `overflow-y-scroll`).
     - Trigger layout: `flex flex-col items-start gap-2 text-left w-full pr-3 md:flex-row md:items-center md:justify-between md:gap-6`
     - Title: `text-2xl sm:text-4xl md:text-5xl font-bold break-words` with `id` and `scroll-mt-20 md:scroll-mt-6`.
     - Tech stack: on mobile, clean wrap of compact tags/pills (`flex flex-wrap gap-1.5 text-xs sm:text-sm`); on desktop (`md:`), stacked or aligned cleanly beside a vertical `Separator`.
     - Content: `text-base sm:text-lg md:text-xl leading-relaxed space-y-3`.

4. **Fix global button styling & wrapping (`src/index.css`, `src/components/ui/button.jsx`)**
   - Remove the stale Vite starter block in `src/index.css` lines 10–21 (`@media (prefers-color-scheme: light)` setting global `button { background-color: #334155 }`) that breaks ghost/transparent button backgrounds in light mode.
   - Ensure full-width buttons with long labels can wrap cleanly when needed (either via a helper class `whitespace-normal h-auto py-2 text-center` on long CTA buttons or adjusting `Button` usage consistently).

---

### Phase 3: Make the Change — App Shell & Mobile Navigation

1. **Refactor `src/App.jsx` layout shell**
   - Replace `w-screen inline-block ... bg-fixed` on the outer background container with `min-h-screen w-full overflow-x-clip bg-cover bg-center bg-no-repeat md:bg-fixed` (or a dedicated fixed background layer `fixed inset-0 -z-10 bg-cover bg-center` so mobile Safari renders smoothly without jitter).
   - Ensure the translucent overlay (`bg-slate-400/80`) has `min-h-screen w-full`.
   - Replace `<div className="block">` inside `<SidebarProvider>` with `<div className="flex flex-1 flex-col min-w-0 w-full">` (or `<SidebarInset className="bg-transparent">`).
   - Upgrade the mobile top bar:
     - `sticky top-0 z-30 flex h-14 w-full items-center gap-3 bg-slate-900/95 backdrop-blur px-3 text-white shadow-sm md:hidden`
     - Give `<SidebarTrigger>` a comfortable touch target (`h-10 w-10`) and clear contrast (`text-white hover:bg-slate-800 hover:text-white`).
     - Replace invalid `w-100` on the title with `text-lg font-semibold truncate` (and make it link/navigate home or display site title cleanly).
   - Replace `<div className="flex flex-col w-3/4">` with a responsive main content container:
     - `<main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">`
   - Fix the WIP `<Alert>` banner:
     - Replace `m-10` with `mb-6` (spacing handled by `<main>` padding).
     - Fix the feedback `<Button>`: remove the raw URL from the button label (e.g., `"Got feedback? Let me know!"`) and add `whitespace-normal h-auto py-2.5 text-center` so it never overflows on 360px screens.

2. **Fix mobile sidebar drawer UX (`src/sidebar/sidebar.jsx`, `src/components/ui/sidebar.jsx`)**
   - In `AppSidebar`:
     - Call `const { isMobile, setOpenMobile } = useSidebar();`.
     - Create a `handleNavigate(to)` helper that calls `navigate(to)` and, if `isMobile`, calls `setOpenMobile(false)`.
     - Use `handleNavigate` for all `SidebarMenuButton` and `SidebarGroupLabel` clicks, and close the mobile drawer on `SidebarFooter` external/CV link clicks as well.
     - Remove the duplicate `onClick` handler on the Raytheon `SidebarMenuItem` (lines 49–53).
     - Add `cursor-pointer` to clickable `SidebarGroupLabel` items and ensure touch-friendly item spacing on mobile.
   - In `src/components/ui/sidebar.jsx`:
     - Add an `sr-only` `<SheetTitle>Navigation</SheetTitle>` and `<SheetDescription>Site navigation menu</SheetDescription>` inside mobile `SheetContent` to satisfy Radix Dialog accessibility requirements and eliminate console warnings.
     - Remove `[&>button]:hidden` (or add a visible close button in the mobile drawer header) so users have an explicit close affordance in addition to backdrop tap, Escape key, and nav item selection.
     - Verify the mobile drawer width (`--sidebar-width: 18rem`, `max-w-[85vw]`) fits comfortably on small 320px–375px screens.

---

### Phase 4: Make the Change — Page-by-Page Mobile Polish

1. **Home (`src/pages/Home/Home.jsx`)**
   - Remove `w-[83vw] min-w-full`; use `w-full flex flex-col gap-6 sm:gap-8 py-2 sm:py-6`.
   - For each pillar (`Code`, `Change`, `Impact`):
     - Use a responsive container: `flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-6`.
     - Replace broken `scale-[2]` + `text-8xl` icon styling with explicit responsive sizing (e.g., `[&_svg]:size-8 sm:[&_svg]:size-12 md:[&_svg]:size-16` or explicit icon `className="size-8 sm:size-12 md:size-14 shrink-0"` overriding `Toggle`'s default `[&_svg]:size-4`).
     - Use responsive heading typography: `text-4xl sm:text-6xl lg:text-8xl font-extrabold`.
     - Set `Toggle` to `h-auto w-full md:w-auto justify-between md:justify-start px-3 py-3 sm:p-4 md:p-6` with `pressed={toggleX}` / `onPressedChange={setToggleX}` (instead of unmanaged `onClick`) so Radix `data-state` and `aria-pressed` stay accurate, and add clear active/hover colors.
     - Style expanded description panels for mobile readability: `w-full md:w-1/2 p-4 sm:p-6 md:p-8 border-4 ... bg-slate-900/60 text-white rounded-md text-base sm:text-xl md:text-2xl leading-relaxed`.

2. **Profile/CV Pages (`Work.jsx`, `Edu.jsx`, `Certs.jsx`, `CPD.jsx`, `Activities.jsx`)**
   - Replace the duplicated `scrollToHash` `useEffect` with `useHashScroll()`.
   - Migrate each entry block to `<PageSection id="..." title="..." meta={[...]}>`.
   - Page-specific polish:
     - `Activities.jsx`: add `whitespace-normal h-auto py-2.5 text-center` to the Mindhub `<Button>` so it wraps cleanly on mobile.
     - `CPD.jsx`: add `w-full h-auto max-w-full rounded-md` to both certificate `<img>` tags, add `alt="Risk Management for Cyber Security Managers Certificate"` to the `RISKMNG01` image, and add `text-left gap-2` to `AccordionTrigger`.

3. **Projects (`Projects.jsx`, `Portfolio.jsx`, `JsUseDocs.jsx`, `JsUseDocsTools.jsx`, `LiveQuery.jsx`)**
   - In `Projects.jsx`: replace `min-w-max p-5 justify-between w-[60vw] max-w-[60vw]` with `w-full space-y-2`, remove the stray `<br className="w-full" />`, and use `useHashScroll()`.
   - Refactor `Portfolio`, `JsUseDocs`, `JsUseDocsTools`, and `LiveQuery` to use `<ProjectAccordionItem>`.

4. **Resources (`Resources.jsx`, `Recomended.jsx`, `Self.jsx`)**
   - In `Resources.jsx`: replace `w-[60vw] p-5` on `<Tabs>` with `w-full`.
   - In `Recomended.jsx`:
     - Replace fixed `width="560" height="315"` YouTube `<iframe>` with a responsive wrapper:
       ```jsx
       <div className="relative w-full aspect-video overflow-hidden rounded-md">
         <iframe className="w-full h-full" ... allowFullScreen />
       </div>
       ```
     - Add `text-left` to `AccordionTrigger` items and responsive heading sizes (`text-2xl sm:text-3xl`).
   - In `Self.jsx`:
     - Replace `<Button className="w-full m-1">` with a `<div className="flex flex-col gap-2">` wrapper around `w-full` buttons (eliminating horizontal margin overflow).
     - Add `text-left` to `AccordionTrigger` items.

---

## 4. Verification, Testing & Documentation Plan

### A. Automated Unit & Component Tests (`npm run test:unit`)
Write focused Vitest + React Testing Library tests covering the new primitives and mobile behavior:
1. **`useIsMobile` (`src/hooks/use-mobile.test.jsx`)**: verifies breakpoint transitions at `< 768px` (mobile) and `>= 768px` (desktop) via mocked `window.matchMedia` / `window.innerWidth`.
2. **`AppSidebar` mobile navigation (`src/sidebar/sidebar.test.jsx`)**:
   - Renders `SidebarProvider` + `AppSidebar` in mobile viewport (`matchMedia` mocked to `< 768px`).
   - Opens the mobile drawer via `SidebarTrigger`, clicks a nav item (e.g. `Work` or `Raytheon`), asserts navigation occurred **and** the mobile drawer closes automatically.
3. **`PageSection` & `ProjectAccordionItem` (`src/components/PageSection.test.jsx`)**: verifies IDs, titles, metadata rendering, and accordion expand/collapse interaction.
4. **Route smoke tests (`src/App.test.jsx`)**: wraps `<App />` in `MemoryRouter` (matching `HashRouter` route structure in `src/main.jsx`) and renders all 8 routes (`/`, `/work`, `/certs`, `/cpd`, `/projects`, `/edu`, `/activities`, `/resources`) without errors or missing-title accessibility warnings.

### B. Headless Visual & Overflow Verification (No Long-Lived Servers)
Run an isolated headless check (e.g., via `npm run capture:screenshot` if available, or a one-shot Vite preview + Playwright/Chromium verification script that starts, checks, and exits cleanly):
1. **Zero horizontal overflow assertion**: across all 8 routes at `375×812`, `390×844`, `768×1024`, and `1280×800`, assert `document.documentElement.scrollWidth <= window.innerWidth`.
2. **Interactive mobile checks**:
   - Open mobile drawer -> click a route -> verify drawer closes and new page renders.
   - Home page: toggle `Code`, `Change`, `Impact` open/closed -> verify no overflow and readable text.
   - Projects page: expand an accordion item -> verify content fits within viewport.
   - Resources page: switch between `Recomended` and `Self Made` tabs, expand YouTube talk accordion -> verify iframe fits within viewport.
   - Hash link navigation (e.g., `/#/certs#azure`) -> verify target heading is not obscured by the sticky mobile header.
3. **Visual review**: inspect before/after screenshots at `375×812` and `1280×800` to confirm visual polish and desktop parity.

### C. Build & Lint Gate
1. Run `npm run lint` — must pass with 0 errors.
2. Run `npm run test:unit` — all tests must pass.
3. Run `npm run build` — must succeed cleanly.
   - **Check `docs/tasks/`**: `vite.config.js` builds into `docs/` with Vite's default `emptyOutDir: true`, which wipes `docs/tasks/` on build. Immediately restore or preserve `docs/tasks/` (e.g., `git checkout -- docs/tasks` if tracked, or back up and restore `docs/tasks/` around `npm run build`) and verify `docs/tasks/f77c53b0-34d4-4159-b91a-92e40fc3fbf2/` is intact before finishing.

### D. Documentation Updates
1. Update `src/pages/projects/portfolio/Portfolio.jsx` Status text (currently says `"Mobile experience is currently not great."`) to reflect the completed mobile improvements.
2. Update `README.md` if unit tests are added (update the `"Why no tests?"` FAQ entry and document `npm run test:unit`).
