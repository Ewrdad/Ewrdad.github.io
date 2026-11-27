import { isValidElement } from "react";

/**
 * Normalizes an HTML anchor ID, returning undefined for non-strings or blanks
 * so components never emit invalid empty `id=""` attributes.
 *
 * @param {unknown} id
 * @returns {string | undefined}
 */
export function normalizeAnchorId(id) {
  if (typeof id !== "string") return undefined;
  const trimmed = id.trim();
  return trimmed || undefined;
}

/**
 * Normalizes a string or array of strings into non-empty trimmed paragraphs.
 * Fails safe by returning an empty array for null, undefined, or invalid input.
 *
 * @param {string | string[] | null | undefined} value
 * @returns {string[]}
 */
export function normalizeTextItems(value) {
  const items = Array.isArray(value) ? value : value == null ? [] : [value];
  return items
    .filter((item) => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

/**
 * Normalizes PageSection metadata into renderable items, dropping nullish,
 * boolean, non-finite numbers, plain non-React objects, and whitespace-only strings.
 *
 * @param {unknown} meta
 * @returns {unknown[]}
 */
export function normalizeMetaItems(meta) {
  const items = Array.isArray(meta) ? meta : meta == null ? [] : [meta];
  return items.reduce((acc, item) => {
    if (item == null || typeof item === "boolean") {
      return acc;
    }
    if (typeof item === "string") {
      const trimmed = item.trim();
      if (trimmed) {
        acc.push(trimmed);
      }
      return acc;
    }
    if (typeof item === "number") {
      if (Number.isFinite(item)) {
        acc.push(item);
      }
      return acc;
    }
    if (isValidElement(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

/**
 * Normalizes an optional PageSection badge prop.
 * Returns null when the label is missing or blank so empty pills never render.
 *
 * @param {string | { label?: string, variant?: string } | null | undefined} badge
 * @returns {{ label: string, variant: string } | null}
 */
export function normalizeBadge(badge) {
  if (typeof badge === "string") {
    const label = badge.trim();
    return label ? { label, variant: "default" } : null;
  }

  if (badge && typeof badge === "object" && typeof badge.label === "string") {
    const label = badge.label.trim();
    if (!label) return null;
    const variant =
      typeof badge.variant === "string" && badge.variant.trim()
        ? badge.variant.trim()
        : "default";
    return { label, variant };
  }

  return null;
}

/**
 * Checks that an external link uses an explicit http(s) URL.
 *
 * @param {unknown} href
 * @returns {boolean}
 */
export function isSafeExternalUrl(href) {
  if (typeof href !== "string") return false;
  const trimmed = href.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

/**
 * Filters and trims external link descriptors, dropping malformed or unsafe entries.
 * Fails safe to an empty array for non-array inputs.
 *
 * @param {unknown} links
 * @returns {{ label: string, href: string }[]}
 */
export function normalizeExternalLinks(links) {
  if (!Array.isArray(links)) return [];
  return links.reduce((acc, link) => {
    if (
      !link ||
      typeof link !== "object" ||
      typeof link.label !== "string" ||
      !isSafeExternalUrl(link.href)
    ) {
      return acc;
    }
    const label = link.label.trim();
    const href = link.href.trim();
    if (label && href) {
      acc.push({ label, href });
    }
    return acc;
  }, []);
}
