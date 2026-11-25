/**
 * @typedef {Object} WorkExperienceItem
 * @property {string} id - Stable hash anchor ID matching sidebar links
 * @property {string} title - Role title
 * @property {string} organization - Company or organization name
 * @property {string} [employmentType] - Optional employment type (e.g., "Full-time", "Internship")
 * @property {string} dateRange - Display date range
 * @property {string} sidebarLabel - Label shown in sidebar navigation
 * @property {string[]} paragraphs - Narrative paragraphs
 */

/**
 * Formats work experience metadata lines for display in PageSection.
 * Fails safe to an empty array if `role` is missing or invalid.
 *
 * @param {WorkExperienceItem | null | undefined} role
 * @returns {string[]}
 */
export function formatWorkMeta(role) {
  if (!role || typeof role !== "object") {
    return [];
  }

  return [role.organization, role.employmentType, role.dateRange]
    .filter((item) => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

/** @type {WorkExperienceItem[]} */
export const WORK_EXPERIENCE = [
  {
    id: "raytheon",
    title: "Cyber & Software Academy Engineer",
    organization: "Raytheon UK",
    employmentType: "Full-time",
    dateRange: "(Sep 2022 - Present)",
    sidebarLabel: "Raytheon (2022 - Present)",
    paragraphs: [
      "Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance and architecture. Alongside plenty of work to do knowledge sharing internally.",
    ],
  },
  {
    id: "ukaea",
    title: "Business System Database Administrator",
    organization: "UK Atomic Energy Authority",
    employmentType: "Internship",
    dateRange: "(Sep 2020 - Sep 2021)",
    sidebarLabel: "UKAEA (2020 - 2021)",
    paragraphs: [
      "A sandwich placement where I was responsible for helping manage and support business processes through an ERP system. This included: moderate to advanced reporting, working with upgrades, new module installation, and system configurations. Also conducted a thorough internal compliance and general security audit, and helped with general security procedures.",
    ],
  },
];
