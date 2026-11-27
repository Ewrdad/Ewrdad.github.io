import { ACTIVITIES } from "@/data/activities";
import { CERTIFICATION_GROUPS } from "@/data/certifications";
import { EDUCATION } from "@/data/education";
import { WORK_EXPERIENCE } from "@/data/experience";

/**
 * Builds sidebar navigation items from a data array, skipping malformed entries
 * so the sidebar never emits broken `#undefined` hash links.
 *
 * @param {unknown} entries
 * @param {string} basePath
 * @param {string} [labelKey]
 * @returns {{ label: string, to: string }[]}
 */
export function buildNavItems(entries, basePath, labelKey = "sidebarLabel") {
  if (!Array.isArray(entries) || typeof basePath !== "string" || !basePath) {
    return [];
  }

  return entries.reduce((acc, entry) => {
    if (!entry || typeof entry !== "object") return acc;
    const id = typeof entry.id === "string" ? entry.id.trim() : "";
    const label =
      typeof entry[labelKey] === "string" ? entry[labelKey].trim() : "";
    if (id && label) {
      acc.push({ label, to: `${basePath}#${id}` });
    }
    return acc;
  }, []);
}

export const NAV_SECTIONS = [
  {
    label: "Work",
    to: "/work",
    items: buildNavItems(WORK_EXPERIENCE, "/work"),
  },
  {
    label: "Certifications",
    to: "/certs",
    items: buildNavItems(CERTIFICATION_GROUPS, "/certs", "vendorLabel"),
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
    items: buildNavItems(EDUCATION, "/edu"),
  },
  {
    label: "External Activities",
    to: "/activities",
    items: buildNavItems(ACTIVITIES, "/activities"),
  },
];
