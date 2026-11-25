# Implementation Plan: Update Credentials from Latest LinkedIn

## 1. Goal & Scope

Update the portfolio website (`ewrdad-github-io`) so that all certifications, work experience, education, and leadership/activity credentials accurately reflect the user's latest LinkedIn profile captured in the task screenshots:

- Experience & Education: `assets/19241.png`
- Licenses & Certifications (part 1): `assets/19242.png`
- Licenses & Certifications (part 2): `assets/19243.png`

Following the principle **"make the change easy, then make the change"**, we will first audit every discrepancy, then refactor the hardcoded page JSX into a structured, single-source-of-truth data layer (preserving existing behavior and passing all current tests), and finally apply the credential updates declaratively with full test coverage and documentation.

---

## 2. Phase 1 — Research & Complete Discrepancy Audit (Do First)

Before editing any code, confirm all files referencing credentials, sidebar anchors, tests, and build outputs.

### 2.1 Codebase Inventory
- **Pages**:
  - `src/pages/certs/Certs.jsx` — Certifications (AWS, CompTIA, Azure/Microsoft)
  - `src/pages/work/Work.jsx` — Work experience (Raytheon, UKAEA)
  - `src/pages/edu/Edu.jsx` — Education (University of South Wales, Cardiff High School)
  - `src/pages/activities/Activities.jsx` — External activities (Enactus USW, Cardiff Youth Council, 3D Printing)
- **Navigation & Shared UI**:
  - `src/sidebar/sidebar.jsx` — Sidebar labels and hash links (`/work#raytheon`, `/certs#aws`, `/certs#comptia`, `/certs#azure`, etc.)
  - `src/components/PageSection.jsx` — Shared section renderer (`id`, `title`, `meta`, `children`)
- **Tests**:
  - `src/App.test.jsx` — Route smoke tests (note: line 9 currently matches `/cyber and software academy enginer/i` with typo)
  - `src/sidebar/sidebar.test.jsx` — Sidebar navigation and drawer tests
  - `src/components/PageSection.test.jsx` — `PageSection` unit tests
- **Build & Static Artifacts**:
  - `vite.config.js` — Builds into `docs/` while preserving `docs/tasks/`
  - `package.json` — `npm run build` copies `EdwardJones-Resume-Sanitised.pdf` to `./docs/EdwardJones-Resume-Sanitised.pdf`

### 2.2 Canonical Diff: Current Site vs. Latest LinkedIn

#### Certifications (`src/pages/certs/Certs.jsx`)
| Credential | Current Site | Latest LinkedIn (`assets/19242.png`, `assets/19243.png`) | Action |
| :--- | :--- | :--- | :--- |
| **AWS Certified Solutions Architect – Professional** | *Missing* | Amazon Web Services (AWS) · Issued May 2026 · Expires May 2029 | **Add** as top AWS item (anchor `#aws` moves to top of AWS group) |
| **AWS Certified Solutions Architect – Associate** | `Solutions Architect Associate` · `Amazon Web Services`, `SAA-C03`, `(2024-2027)` | Amazon Web Services (AWS) · Issued Nov 2024 · Expires Nov 2027 | **Update** title/dates (`Nov 2024 – Nov 2027`), retain `SAA-C03`, fix copy typos (`pay of` → `payoff`, `plent` → `plenty`) |
| **AWS Certified Cloud Practitioner** | `Certified Cloud Practitioner` · `Amazon Web Services`, `(2023-2027)` | Amazon Web Services (AWS) · Issued Feb 2023 · Expires Nov 2027 | **Update** title/dates (`Feb 2023 – Nov 2027`), fix minor copy (`Amazon Web Services`) |
| **AWS Partner: Accreditation (Technical)** | *Missing* | Amazon Web Services (AWS) · Issued Jan 2023 | **Add** under AWS |
| **AWS Partner: Cloud Economics Accreditation** | *Missing* | Amazon Web Services (AWS) · Issued Jan 2023 | **Add** under AWS |
| **CompTIA Security+ ce Certification** | `Security+` · `CompTIA`, `(2023-2026)` | CompTIA · Issued Apr 2023 · **Expired Apr 2026** | **Update** title & mark clearly as **Expired (Apr 2026)** |
| **Microsoft Certified: Security, Compliance, and Identity Fundamentals** | `Security and Complaince Fundementals` · `Azure`, `(2020)` | Microsoft · Issued Oct 2021 | **Update** title, issuer (`Microsoft`), date (`Oct 2021`), fix typos |
| **Microsoft Certified: Azure AI Fundamentals** | `AI Fundementals` · `Azure`, `(2020)` | Microsoft · Issued Jun 2021 | **Update** title, issuer (`Microsoft`), date (`Jun 2021`), fix typo |
| **Microsoft Certified: Azure Fundamentals** | `Azure Fundementals` · `Azure`, `(2020)` | Microsoft · Issued Jun 2021 | **Update** title, issuer (`Microsoft`), date (`Jun 2021`), fix typo |

#### Work Experience (`src/pages/work/Work.jsx`)
| Role | Current Site | Latest LinkedIn (`assets/19241.png`) | Action |
| :--- | :--- | :--- | :--- |
| **Raytheon UK** | `Cyber And Software Academy Enginer` · `Raytheon`, `(2022-2024)` | `Cyber & Software Academy Engineer` · `Raytheon UK · Full-time` · `Sep 2022 - Present` | **Update** title, company (`Raytheon UK`), and dates (`Sep 2022 – Present`) |
| **UKAEA** | `Buisness Systems Database Admin` · `UK Atomic Energy Authority`, `(2020-2021)` | `Business System Database Administrator` · `UK Atomic Energy Authority · Internship` · `Sep 2020 - Sep 2021` | **Update** title (fix typo) and dates (`Sep 2020 – Sep 2021`) |

#### Education (`src/pages/edu/Edu.jsx`) & External Activities (`src/pages/activities/Activities.jsx`)
| Entry | Current Site | Latest LinkedIn (`assets/19241.png`) | Action |
| :--- | :--- | :--- | :--- |
| **University of South Wales** | `[2:1] BSc Computer Security` · `University of South Wales`, `(2018-2022)` | `Bachelor's degree, Computer and Information Systems Security/Information Assurance` · `2018 – 2022` · `Grade: 2:1` | **Keep/refine** degree wording & fix copy typos (`sandwhich` → `sandwich`, `Buisness` → `Business` in CHS) |
| **Enactus USW** | `Enactus USW` · `Member and President`, `(2018-2020)` | `President/Team Leader` · `Enactus USW` · `Jun 2019 - Jun 2020` | **Clarify** role/dates (e.g., `President / Team Leader (2019–2020)` while preserving first-year member context in description) & fix typos (`memebr` → `member`, `societies` → `society's`) |
| **Cardiff Youth Council** | `Cardiff Youth Council` · `Member and vice-chair`, `(2016-2018)` | `Vice Chair` · `Cardiff Youth Council` · `Jun 2017 - Jun 2019` | **Update** dates to `Jun 2017 – Jun 2019` (or `2017–2019`) & title `Vice Chair`, fix typos (`opportunites` → `opportunities`) |
| **Sidebar (`src/sidebar/sidebar.jsx`)** | `Certifcations`, `Proffesional Development`, `Azure` | N/A | **Fix spelling** (`Certifications`, `Professional Development`) and consider labeling `Microsoft / Azure` while keeping `/certs#azure` anchor stable |

#### Out-of-Scope / Follow-up Note
- `EdwardJones-Resume-Sanitised.pdf` is a static binary PDF copied into `docs/` on build. It cannot be reliably regenerated from screenshots alone; flag in PR/completion notes for the user to replace the PDF if desired.

---

## 3. Phase 2 — Make the Change Easy (Structural Refactoring, No Content Drift Yet)

Before updating any credential content, refactor the credential pages so future updates are a single declarative data edit and cannot drift from sidebar anchors.

### Step 2.1: Introduce a Structured Credential Data Layer (`src/data/`)
Create data modules with JSDoc schema comments:
1. `src/data/certifications.js`
   - Export `CERTIFICATION_GROUPS` ordered by vendor (`aws`, `comptia`, `azure`), each containing:
     - `id`: stable anchor ID matching sidebar links (`"aws"`, `"comptia"`, `"azure"`)
     - `vendorLabel`: display name for the group (`"AWS"`, `"CompTIA"`, `"Microsoft"`)
     - `items`: array of certification objects:
       - `id` (slug, e.g. `"aws-sap"`)
       - `title`
       - `issuer`
       - `code` (optional, e.g. `"SAA-C03"`)
       - `issued` (e.g. `"May 2026"`)
       - `expires` (optional, e.g. `"May 2029"` or `"Apr 2026"`)
       - `status`: `"active" | "expired" | "no-expiry"`
       - `description`: string or string[]
   - Export a small pure helper `formatCertificationMeta(cert)` that consistently formats `[issuer, code, dateRange, statusLabel]` (e.g., appending `"Expired"` when `status === "expired"`).
2. `src/data/experience.js`
   - Export `WORK_EXPERIENCE` array with `id`, `title`, `organization`, `employmentType`, `dateRange`, `sidebarLabel`, and `paragraphs`.
3. `src/data/education.js` & `src/data/activities.js`
   - Export `EDUCATION` and `ACTIVITIES` arrays with `id`, `title`, `meta`, `paragraphs`, and optional `links` (for Mindhub button on Cardiff Youth Council).

### Step 2.2: Enhance `PageSection` for Optional Status Badges
In `src/components/PageSection.jsx`:
- Add an optional `badge` prop (e.g., `{ label: "Expired", variant: "expired" }` or plain string) rendered cleanly alongside the title or metadata without breaking existing callers (`badge` defaults to `null`).
- Keep `id` on the heading/section with `scroll-mt-20 md:scroll-mt-6` so hash navigation continues to work on mobile and desktop.

### Step 2.3: Refactor Pages to Render from Data Modules
- Refactor `src/pages/certs/Certs.jsx` to map over `CERTIFICATION_GROUPS` and attach each group's `id` (`aws`, `comptia`, `azure`) to the first `<PageSection>` in that group (or a semantic group wrapper with `scroll-mt-20`). This guarantees adding a new top certification (like Solutions Architect – Professional) never breaks `/certs#aws`.
- Refactor `src/pages/work/Work.jsx`, `src/pages/edu/Edu.jsx`, and `src/pages/activities/Activities.jsx` to map over their respective data modules.
- Update `src/sidebar/sidebar.jsx` to derive work/certification nav items cleanly (or reference shared constants for IDs) so sidebar anchors and page IDs cannot drift.

### Step 2.4: Refactor Checkpoint
- Run `npm run test:unit` and `npm run lint` immediately after Phase 2 (before changing copy/credentials) to confirm the refactor is 100% behavior-preserving.

---

## 4. Phase 3 — Make the Change (Update Credentials & Fix Typos)

Now that the data layer is in place, update the data files cleanly:

### Step 3.1: Update Certifications (`src/data/certifications.js`)
1. **AWS group (`id: "aws"`)** — ordered newest/highest first:
   - **AWS Certified Solutions Architect – Professional** — `Amazon Web Services (AWS)`, `Issued May 2026 · Expires May 2029`, `status: "active"`. Write a concise, natural description matching the site's tone (building on Solutions Architect Associate and hands-on AWS architecture experience).
   - **AWS Certified Solutions Architect – Associate** — `Amazon Web Services (AWS)`, `SAA-C03`, `Issued Nov 2024 · Expires Nov 2027`, `status: "active"`. Retain existing narrative with minor typo fixes.
   - **AWS Certified Cloud Practitioner** — `Amazon Web Services (AWS)`, `Issued Feb 2023 · Expires Nov 2027`, `status: "active"`. Retain existing narrative with minor typo fix.
   - **AWS Partner: Accreditation (Technical)** — `Amazon Web Services (AWS)`, `Issued Jan 2023`, `status: "no-expiry"`. Add concise description of AWS Partner technical accreditation.
   - **AWS Partner: Cloud Economics Accreditation** — `Amazon Web Services (AWS)`, `Issued Jan 2023`, `status: "no-expiry"`. Add concise description of AWS Partner cloud economics accreditation.
2. **CompTIA group (`id: "comptia"`)**:
   - **CompTIA Security+ ce Certification** — `CompTIA`, `Issued Apr 2023 · Expired Apr 2026`, `status: "expired"` (renders visible `Expired` badge/label). Retain existing narrative.
3. **Microsoft / Azure group (`id: "azure"`)** — ordered newest first to match LinkedIn:
   - **Microsoft Certified: Security, Compliance, and Identity Fundamentals** — `Microsoft`, `Issued Oct 2021`, `status: "no-expiry"`.
   - **Microsoft Certified: Azure AI Fundamentals** — `Microsoft`, `Issued Jun 2021`, `status: "no-expiry"`.
   - **Microsoft Certified: Azure Fundamentals** — `Microsoft`, `Issued Jun 2021`, `status: "no-expiry"`.

### Step 3.2: Update Work Experience (`src/data/experience.js`)
- **Raytheon UK (`id: "raytheon"`)**:
  - Title: `Cyber & Software Academy Engineer`
  - Meta: `["Raytheon UK", "Full-time", "(Sep 2022 - Present)"]`
- **UK Atomic Energy Authority (`id: "ukaea"`)**:
  - Title: `Business System Database Administrator`
  - Meta: `["UK Atomic Energy Authority", "Internship", "(Sep 2020 - Sep 2021)"]`

### Step 3.3: Update Education & External Activities (`src/data/education.js`, `src/data/activities.js`)
- **University of South Wales (`id: "uni"`)**:
  - Keep `2:1`, `University of South Wales`, `(2018-2022)`, clarify full degree title (`BSc Computer and Information Systems Security / Information Assurance` or `[2:1] BSc Computer Security` with full degree noted), fix `sandwhich` → `sandwich`.
- **Cardiff High School (`id: "chs"`)**:
  - Fix `Buisness Studies` → `Business Studies`.
- **Enactus USW (`id: "enactus"`)**:
  - Clarify `President / Team Leader (Jun 2019 - Jun 2020)` (keeping mention of joining as a member in 2018 in the text) and fix typos.
- **Cardiff Youth Council (`id: "cyc"`)**:
  - Update to `Vice Chair`, `(Jun 2017 - Jun 2019)` and fix typos.

### Step 3.4: Polish Sidebar Labels (`src/sidebar/sidebar.jsx`)
- Fix `"Certifcations"` → `"Certifications"`
- Fix `"Proffesional Development"` → `"Professional Development"`
- Keep `"Raytheon (2022 - Present)"`, `"UKAEA (2020 - 2021)"`, and all hash routes (`/certs#aws`, `/certs#comptia`, `/certs#azure`, etc.) intact.

---

## 5. Phase 4 — Testing, Verification & Documentation Plan

### 5.1 Unit & Component Tests (`npm run test:unit`)
1. **Update existing tests** where typos were intentionally fixed:
   - `src/App.test.jsx`: update `/work` expected text from `/cyber and software academy enginer/i` to `/cyber & software academy engineer/i` and `/certs` expected text to verify `/solutions architect – professional/i` (or `/solutions architect/i`).
2. **Add `src/pages/certs/Certs.test.jsx`**:
   - Verifies all 9 LinkedIn certifications render with exact titles, issuers (`Amazon Web Services (AWS)`, `CompTIA`, `Microsoft`), and date strings.
   - Verifies `AWS Certified Solutions Architect – Professional` appears before `Associate` under `#aws`.
   - Verifies `CompTIA Security+ ce Certification` displays its expired status (`Expired Apr 2026`).
   - Verifies `#aws`, `#comptia`, and `#azure` anchor IDs are present in the DOM.
   - Unit-tests `formatCertificationMeta` for `active`, `expired`, and `no-expiry` items.
3. **Add `src/pages/work/Work.test.jsx`**:
   - Verifies `Cyber & Software Academy Engineer` (`Raytheon UK`, `Sep 2022 - Present`) and `Business System Database Administrator` (`UK Atomic Energy Authority`, `Sep 2020 - Sep 2021`) render with `#raytheon` and `#ukaea` anchors.
4. **Add Sidebar-to-Page Anchor Integrity Test** (in `src/sidebar/sidebar.test.jsx` or `src/App.test.jsx`):
   - Asserts that every hash target defined in `NAV_SECTIONS` (`/work#raytheon`, `/work#ukaea`, `/certs#aws`, `/certs#comptia`, `/certs#azure`, `/edu#uni`, `/edu#chs`, `/activities#enactus`, `/activities#cyc`, `/activities#3d`) exists in the rendered DOM of its route.
5. **Update `src/components/PageSection.test.jsx`**:
   - Add a test case verifying optional `badge` rendering (e.g., `Expired` badge).

### 5.2 Lint & Production Build Verification
Run in sequence:
```bash
npm run test:unit && npm run lint && npm run build
```
Confirm:
- All Vitest suites pass with zero console errors or warnings.
- ESLint reports zero errors/warnings.
- `vite build` succeeds, updates `docs/` assets cleanly, preserves `docs/tasks/`, and copies `EdwardJones-Resume-Sanitised.pdf`.

### 5.3 Visual Verification (Headless Only)
- If visual review is needed, avoid spawning long-lived background dev servers; use an isolated headless screenshot check (if available in the environment) against the built `docs/` bundle at both desktop (`1280×800`) and mobile (`375×812`) viewports to verify:
  - Long certification titles (e.g., `Microsoft Certified: Security, Compliance, and Identity Fundamentals`) wrap cleanly without horizontal overflow.
  - The `Expired` status badge on CompTIA Security+ has clear visual contrast against the translucent slate background.

### 5.4 Documentation Plan
- Update `README.md` with a brief **"Updating Credentials & Profile Data"** section pointing to `src/data/` (`certifications.js`, `experience.js`, `education.js`, `activities.js`) and explaining how to add/expire certifications and rebuild `docs/` with `npm run build`.
- Note in the final implementation summary that `EdwardJones-Resume-Sanitised.pdf` is a static binary file and should be updated separately by the user when a new CV PDF is exported.
