import { test } from 'node:test';
import assert from 'node:assert';

/**
 * Validates if a URL is safe to use in a link.
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

const COMBINED_REGEX_SOURCE = '(\\*\\*(.*?)\\*\\*)|(_(.*?)_)|(\\[([^\\]]+)\\]\\(([^)]+)\\))';

export function parseFormattedTextInternal(text: string): any[] {
  const parts: any[] = [];
  let lastIndex = 0;
  let match;

  const localRegex = new RegExp(COMBINED_REGEX_SOURCE, 'g');

  while ((match = localRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
    }

    if (match[1]) {
      parts.push({ type: 'strong', content: parseFormattedTextInternal(match[2]) });
    } else if (match[3]) {
      parts.push({ type: 'em', content: parseFormattedTextInternal(match[4]) });
    } else if (match[5]) {
      const linkText = match[6];
      const url = match[7];

      if (isSafeUrl(url)) {
        parts.push({ type: 'a', href: url, content: parseFormattedTextInternal(linkText) });
      } else {
        parts.push(...parseFormattedTextInternal(linkText));
      }
    }

    lastIndex = localRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.substring(lastIndex) });
  }

  return parts.length === 0 ? [{ type: 'text', content: text }] : parts;
}

test('isSafeUrl validates protocols correctly', () => {
  assert.strictEqual(isSafeUrl('https://example.com'), true);
  assert.strictEqual(isSafeUrl('http://example.com'), true);
  assert.strictEqual(isSafeUrl('mailto:test@example.com'), true);
  assert.strictEqual(isSafeUrl('/relative/path'), true);
  assert.strictEqual(isSafeUrl('#anchor'), true);
  assert.strictEqual(isSafeUrl('javascript:alert(1)'), false);
  assert.strictEqual(isSafeUrl('data:text/html,<html>'), false);
});

test('parseFormattedTextInternal handles basic text', () => {
  const result = parseFormattedTextInternal('Hello world');
  assert.deepStrictEqual(result, [{ type: 'text', content: 'Hello world' }]);
});

test('parseFormattedTextInternal handles bold, italic and links', () => {
  const input = 'This is **bold**, this is _italic_, and this is a [link](https://example.com)';
  const result = parseFormattedTextInternal(input);

  assert.strictEqual(result[0].content, 'This is ');
  assert.strictEqual(result[1].type, 'strong');
  assert.deepStrictEqual(result[1].content, [{ type: 'text', content: 'bold' }]);
  assert.strictEqual(result[2].content, ', this is ');
  assert.strictEqual(result[3].type, 'em');
  assert.deepStrictEqual(result[3].content, [{ type: 'text', content: 'italic' }]);
  assert.strictEqual(result[4].content, ', and this is a ');
  assert.strictEqual(result[5].type, 'a');
  assert.strictEqual(result[5].href, 'https://example.com');
  assert.deepStrictEqual(result[5].content, [{ type: 'text', content: 'link' }]);
});

test('parseFormattedTextInternal prevents unsafe links', () => {
  const input = 'Click [here](javascript:alert(1))';
  const result = parseFormattedTextInternal(input);

  assert.strictEqual(result[0].content, 'Click ');
  assert.strictEqual(result[1].content, 'here');
  assert.strictEqual(result[1].type, 'text');
});
