/**
 * Validates if a URL is safe to use in an anchor tag.
 * Allows relative URLs, anchors, and specific safe protocols.
 */
const isSafeUrl = (url: string): boolean => {
  const trimmedUrl = url.trim();
  if (trimmedUrl.startsWith('/') || trimmedUrl.startsWith('#')) return true;

  try {
    const parsed = new URL(trimmedUrl);
    return ['http:', 'https:', 'mailto:'].includes(parsed.protocol.toLowerCase());
  } catch (e) {
    // If it's not a valid absolute URL and doesn't start with / or #,
    // we treat it as unsafe to be on the side of caution.
    return false;
  }
};

const BOLD_REGEX = /^\*\*(.*)\*\*$/;
const ITALIC_REGEX = /^_(.*)_$/;
const LINK_REGEX = /^\[(.*)\]\((.*)\)$/;

/**
 * Parses markdown-like text (bold, italic, links) into React elements.
 * This is a safe alternative to dangerouslySetInnerHTML.
 */
export function parseFormattedText(text: string): any {
  if (!text) return null;

  // Split by bold, italic, or link patterns, capturing the delimiters
  // BOLD: **text**
  // ITALIC: _text_
  // LINK: [text](url)
  const parts = text.split(/(\*\*(?:.*?)\*\*|_(?:.*?)_|\[(?:[^\]]+)\]\((?:[^)]+)\))/g);

  if (parts.length === 1) return text;

  // We use a dynamic way to get React if available, or a mock for testing
  // In Next.js/Browser, React is usually globally available or can be required
  // In the test environment, we expect (global as any).React to be set
  let R: any;
  try {
    // @ts-ignore
    R = (typeof React !== 'undefined' ? React : (global as any).React) || require('react');
  } catch (e) {
    // @ts-ignore
    R = (global as any).React;
  }

  return parts.map((part, index) => {
    if (!part) return null;

    // Check for bold
    const boldMatch = part.match(BOLD_REGEX);
    if (boldMatch) {
      return R.createElement('strong', { key: index }, parseFormattedText(boldMatch[1]));
    }

    // Check for italic
    const italicMatch = part.match(ITALIC_REGEX);
    if (italicMatch) {
      return R.createElement('em', { key: index }, parseFormattedText(italicMatch[1]));
    }

    // Check for link
    const linkMatch = part.match(LINK_REGEX);
    if (linkMatch) {
      const content = linkMatch[1];
      const url = linkMatch[2];
      const safeUrl = isSafeUrl(url) ? url : '#';

      return R.createElement('a', {
        key: index,
        href: safeUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        style: { color: 'var(--primary)', textDecoration: 'underline' }
      }, parseFormattedText(content));
    }

    // Plain text
    return part;
  });
}
