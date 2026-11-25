# Edwards (ewrdad) Portfolio site

Just a simple site to act as a live CV and a bit of a playground

## FAQ

### Can I borrow code?
Feel free to , although this isnt the best code I can do and make sure you aren't pretending to be me.

### Testing
Unit and component tests are written with Vitest and React Testing Library. Run them with:

```bash
npm run test:unit
```

### Updating Credentials & Profile Data
Certifications, work experience, education, and external activities are stored as structured data modules under `src/data/`:

- `src/data/certifications.js` — Vendor groups (`aws`, `comptia`, `azure`), certification items, and `formatCertificationMeta()`. To add a certification, append or prepend an item in the appropriate vendor group; to mark one as expired, set `status: "expired"` and provide `expires`.
- `src/data/experience.js` — Work experience entries and sidebar labels.
- `src/data/education.js` — Education entries.
- `src/data/activities.js` — External activities and links.
- `src/data/navigation.js` — Sidebar navigation derived from the data modules above so hash anchors stay in sync.

After updating any data file, run the test suite, linter, and production build (which outputs to `docs/` and copies `EdwardJones-Resume-Sanitised.pdf`):

```bash
npm run test:unit && npm run lint && npm run build
```

### What can I do with the shared resources?
Feel free to use them anywhere. They are there to spread knowledge and to help people learn about topics. 
