/**
 * Converts a string into a URL-friendly slug.
 * Example: "Hello World 2026!" -> "hello-world-2026"
 */
export const slugify = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        // Replace spaces with -
        .replace(/\s+/g, '-')
        // Remove all non-word chars
        .replace(/[^\w-]+/g, '')
        // Replace multiple - with single -
        .replace(/--+/g, '-')
        // Replace accented characters
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
