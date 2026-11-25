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
 * boolean, and whitespace-only string entries.
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
    acc.push(item);
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
