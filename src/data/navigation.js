import { ACTIVITIES } from "@/data/activities";
import { CERTIFICATION_GROUPS } from "@/data/certifications";
import { EDUCATION } from "@/data/education";
import { WORK_EXPERIENCE } from "@/data/experience";

export const NAV_SECTIONS = [
  {
    label: "Work",
    to: "/work",
    items: WORK_EXPERIENCE.map((role) => ({
      label: role.sidebarLabel,
      to: `/work#${role.id}`,
    })),
  },
  {
    label: "Certifications",
    to: "/certs",
    items: CERTIFICATION_GROUPS.map((group) => ({
      label: group.vendorLabel,
      to: `/certs#${group.id}`,
    })),
  },
  {
    label: "Professional Development",
    to: "/cpd",
    items: [
      { label: "BCS Membership", to: "/cpd#bcs" },
      { label: "Online Training", to: "/cpd#online" },
    ],
  },
  {
    label: "Projects",
    to: "/projects",
    items: [
      { label: "Portfolio", to: "/projects#portfolio" },
      { label: "JsUseDocs", to: "/projects#jsusedocs" },
      { label: "LiveQuery", to: "/projects#livequery" },
    ],
  },
  {
    label: "Education",
    to: "/edu",
    items: EDUCATION.map((item) => ({
      label: item.sidebarLabel,
      to: `/edu#${item.id}`,
    })),
  },
  {
    label: "External Activities",
    to: "/activities",
    items: ACTIVITIES.map((activity) => ({
      label: activity.sidebarLabel,
      to: `/activities#${activity.id}`,
    })),
  },
];
