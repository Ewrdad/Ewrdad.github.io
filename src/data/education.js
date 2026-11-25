/**
 * @typedef {Object} EducationItem
 * @property {string} id - Stable hash anchor ID matching sidebar links
 * @property {string} title - Qualification or degree title
 * @property {string[]} meta - Metadata lines (institution, dates, etc.)
 * @property {string} sidebarLabel - Label shown in sidebar navigation
 * @property {string[]} paragraphs - Narrative paragraphs
 */

/** @type {EducationItem[]} */
export const EDUCATION = [
  {
    id: "uni",
    title: "[2:1] BSc Computer Security",
    meta: [
      "University of South Wales",
      "Computer and Information Systems Security / Information Assurance",
      "(2018-2022)",
    ],
    sidebarLabel: "BSc Computer Security",
    paragraphs: [
      "A sandwich bachelor's degree based in Pontypridd. Learning skills from Cryptography to software development, with a keen focus on Penetration testing.",
    ],
  },
  {
    id: "chs",
    title: "GCSEs + A levels",
    meta: ["Cardiff High School", "(2014-2018)"],
    sidebarLabel: "Cardiff High School",
    paragraphs: [
      "GCSE: Computer Science, Maths, Triple Science, English, Welsh, RP, Textiles, Economics, More I can't remember",
      "A levels: Law, Business Studies, Economics (Also continued studying Computer Science, attending half of the lessons)",
    ],
  },
];
