import React, { ReactNode } from 'react';

const COMBINED_REGEX = /(\*\*(.*?)\*\*)|(_(.*?)_)|(\[([^\]]+)\]\(([^)]+)\))/g;

/**
 * Validates if a URL is safe to use in a link.
 * Allowed: http, https, mailto, relative paths (/), and anchors (#).
 */
export const isSafeUrl = (url: string): boolean => {
  if (url.startsWith('/') || url.startsWith('#')) return true;
  try {
    const parsed = new URL(url);
    return ['http:', 'https:', 'mailto:'].includes(parsed.protocol);
  } catch {
    return false;
  }
};

/**
 * Parses markdown-like text and returns React elements.
 * Supports **bold**, _italic_, and [link](url).
 * Prevents XSS by using React's default escaping for text.
 */
export function parseFormattedText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;

  // Use a local regex instance to avoid state issues with recursion and concurrent calls
  const localRegex = new RegExp(COMBINED_REGEX.source, 'g');

  while ((match = localRegex.exec(text)) !== null) {
    // Add plain text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold: match[2] is the content
      parts.push(<strong key={match.index}>{parseFormattedText(match[2])}</strong>);
    } else if (match[3]) {
      // Italic: match[4] is the content
      parts.push(<em key={match.index}>{parseFormattedText(match[4])}</em>);
    } else if (match[5]) {
      // Link: match[6] is text, match[7] is URL
      const linkText = match[6];
      const url = match[7];

      if (isSafeUrl(url)) {
        parts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)', textDecoration: 'underline' }}
          >
            {parseFormattedText(linkText)}
          </a>
        );
      } else {
        // For unsafe URLs, just render the text
        parts.push(parseFormattedText(linkText));
      }
    }

    lastIndex = localRegex.lastIndex;
  }

  // Add remaining plain text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length === 0 ? text : <React.Fragment>{parts}</React.Fragment>;
}
