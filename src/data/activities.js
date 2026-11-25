/**
 * @typedef {Object} ActivityLink
 * @property {string} label - Button link text
 * @property {string} href - Destination URL
 *
 * @typedef {Object} ActivityItem
 * @property {string} id - Stable hash anchor ID matching sidebar links
 * @property {string} title - Activity or organization title
 * @property {string[]} meta - Metadata lines (role, dates, etc.)
 * @property {string} sidebarLabel - Label shown in sidebar navigation
 * @property {string[]} paragraphs - Narrative paragraphs
 * @property {string} [linksHeading] - Optional subheading before external links
 * @property {ActivityLink[]} [links] - Optional external link buttons
 */

/** @type {ActivityItem[]} */
export const ACTIVITIES = [
  {
    id: "enactus",
    title: "Enactus USW",
    meta: ["President / Team Leader", "(Jun 2019 - Jun 2020)"],
    sidebarLabel: "Enactus",
    paragraphs: [
      "Started as a member in my first year (2018), I fell in love with Enactus and took over as President / Team Leader in my second year. An international society that works to promote social enterprise and drive impact. Being there from the society's founding at USW, I was able to help it grow.",
      "In my time there we were able to compete in the National Finals twice! We also worked on many projects such as waste reuse schemes.",
    ],
  },
  {
    id: "cyc",
    title: "Cardiff Youth Council",
    meta: ["Vice Chair", "(Jun 2017 - Jun 2019)"],
    sidebarLabel: "Cardiff Youth Council",
    paragraphs: [
      "Working to represent the views of young people in Cardiff I had many opportunities to help improve lives of people in Cardiff. This included an international exchange to Germany and many event appearances.",
    ],
    linksHeading: "Here are some things we worked on:",
    links: [
      {
        label: "Mindhub: A mental health platform for young people",
        href: "https://mindhub.wales/",
      },
    ],
  },
  {
    id: "3d",
    title: "3D Printing Hobbyist",
    meta: ["Modified Ender 3"],
    sidebarLabel: "3D Printing Hobbyist",
    paragraphs: [
      "Taking some time to enjoy 3D Printing, largely in PLA but experimenting with other materials. This includes general fidgets and cliches of 3d printing, but also aiming to solve problems in my day to day life. This includes things such as cup holders and other modifications for my partner's wheelchair.",
      "This includes some limited work with CAD software to design my own stl files including those designed to work with external requirements. This is largely done with tinkerCAD which does the job mostly.",
    ],
  },
];
