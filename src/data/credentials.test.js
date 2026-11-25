import { describe, expect, it } from "vitest";
import { ACTIVITIES } from "./activities";
import {
  CERTIFICATION_GROUPS,
  CERTIFICATION_STATUSES,
} from "./certifications";
import { EDUCATION } from "./education";
import { WORK_EXPERIENCE, formatWorkMeta } from "./experience";
import { NAV_SECTIONS } from "./navigation";
import {
  isSafeExternalUrl,
  normalizeBadge,
  normalizeMetaItems,
  normalizeTextItems,
} from "@/lib/content";

const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

describe("Credential data schema and operational integrity", () => {
  it("uses unique, URL-safe IDs and valid statuses for all certification groups and items", () => {
    const groupIds = new Set();
    const itemIds = new Set();

    expect(CERTIFICATION_GROUPS.length).toBeGreaterThan(0);

    for (const group of CERTIFICATION_GROUPS) {
      expect(group.id).toMatch(SLUG_PATTERN);
      expect(groupIds.has(group.id)).toBe(false);
      groupIds.add(group.id);

      expect(group.vendorLabel.trim().length).toBeGreaterThan(0);
      expect(group.items.length).toBeGreaterThan(0);

      for (const item of group.items) {
        expect(item.id).toMatch(SLUG_PATTERN);
        expect(itemIds.has(item.id)).toBe(false);
        itemIds.add(item.id);

        expect(item.title.trim().length).toBeGreaterThan(0);
        expect(item.issuer.trim().length).toBeGreaterThan(0);
        expect(CERTIFICATION_STATUSES).toContain(item.status);
        expect(normalizeTextItems(item.description).length).toBeGreaterThan(0);
      }
    }
  });

  it("uses unique, URL-safe IDs and non-empty fields for work, education, and activities", () => {
    for (const dataset of [WORK_EXPERIENCE, EDUCATION, ACTIVITIES]) {
      const ids = new Set();
      expect(dataset.length).toBeGreaterThan(0);

      for (const entry of dataset) {
        expect(entry.id).toMatch(SLUG_PATTERN);
        expect(ids.has(entry.id)).toBe(false);
        ids.add(entry.id);
        expect(entry.title.trim().length).toBeGreaterThan(0);
        expect(entry.sidebarLabel.trim().length).toBeGreaterThan(0);
        expect(normalizeTextItems(entry.paragraphs).length).toBeGreaterThan(0);
      }
    }

    for (const activity of ACTIVITIES) {
      for (const link of activity.links ?? []) {
        expect(link.label.trim().length).toBeGreaterThan(0);
        expect(isSafeExternalUrl(link.href)).toBe(true);
      }
    }
  });

  it("keeps sidebar navigation routes and hash anchors well-formed and unique", () => {
    const seenTargets = new Set();

    for (const section of NAV_SECTIONS) {
      expect(section.label.trim().length).toBeGreaterThan(0);
      expect(section.to.startsWith("/")).toBe(true);

      for (const item of section.items) {
        expect(item.label.trim().length).toBeGreaterThan(0);
        expect(item.to.startsWith(`${section.to}#`)).toBe(true);
        expect(seenTargets.has(item.to)).toBe(false);
        seenTargets.add(item.to);
      }
    }
  });
});

describe("Content and formatting helpers", () => {
  it("formats work experience metadata safely", () => {
    expect(formatWorkMeta(null)).toEqual([]);
    expect(formatWorkMeta(undefined)).toEqual([]);
    expect(
      formatWorkMeta({
        organization: "  Raytheon UK ",
        employmentType: "",
        dateRange: "(Sep 2022 - Present)",
      })
    ).toEqual(["Raytheon UK", "(Sep 2022 - Present)"]);
  });

  it("normalizes paragraphs, metadata, badges, and external URLs safely", () => {
    expect(normalizeTextItems(null)).toEqual([]);
    expect(normalizeTextItems("  hello  ")).toEqual(["hello"]);
    expect(normalizeTextItems([" a ", "", null, "  ", "b"])).toEqual([
      "a",
      "b",
    ]);

    expect(normalizeMetaItems(null)).toEqual([]);
    expect(normalizeMetaItems(["  ", false, null, "Item"])).toEqual(["Item"]);

    expect(normalizeBadge("")).toBeNull();
    expect(normalizeBadge("   ")).toBeNull();
    expect(normalizeBadge({ label: "  " })).toBeNull();
    expect(normalizeBadge("Active")).toEqual({
      label: "Active",
      variant: "default",
    });

    expect(isSafeExternalUrl("https://mindhub.wales/")).toBe(true);
    expect(isSafeExternalUrl("http://example.com")).toBe(true);
    expect(isSafeExternalUrl("javascript:alert(1)")).toBe(false);
    expect(isSafeExternalUrl("not-a-url")).toBe(false);
    expect(isSafeExternalUrl(null)).toBe(false);
  });
});
