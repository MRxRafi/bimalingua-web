import { test } from 'node:test';
import assert from 'node:assert';

// Mocking React.createElement for testing in environment without React installed
const ReactMock = {
  createElement: (type: string, props: any, ...children: any[]) => {
    return { type, props: { ...props, children: children.length === 1 ? children[0] : children } };
  }
};

(global as any).React = ReactMock;

import { parseFormattedText } from '../blog-utils.ts';

test('parseFormattedText - plain text', () => {
  const result = parseFormattedText('Hello world');
  assert.strictEqual(result, 'Hello world');
});

test('parseFormattedText - bold text', () => {
  const result = parseFormattedText('Hello **world**');
  if (Array.isArray(result)) {
    const filtered = result.filter(p => p !== null);
    assert.strictEqual(filtered[0], 'Hello ');
    const boldElement = filtered[1];
    assert.strictEqual(boldElement.type, 'strong');
    assert.strictEqual(boldElement.props.children, 'world');
  }
});

test('parseFormattedText - italic text', () => {
  const result = parseFormattedText('Hello _world_');
  if (Array.isArray(result)) {
    const filtered = result.filter(p => p !== null);
    assert.strictEqual(filtered[0], 'Hello ');
    const italicElement = filtered[1];
    assert.strictEqual(italicElement.type, 'em');
    assert.strictEqual(italicElement.props.children, 'world');
  }
});

test('parseFormattedText - link text', () => {
  const result = parseFormattedText('Check [this](https://example.com)');
  if (Array.isArray(result)) {
    const filtered = result.filter(p => p !== null);
    assert.strictEqual(filtered[0], 'Check ');
    const linkElement = filtered[1];
    assert.strictEqual(linkElement.type, 'a');
    assert.strictEqual(linkElement.props.href, 'https://example.com');
    assert.strictEqual(linkElement.props.children, 'this');
  }
});

test('parseFormattedText - unsafe link (javascript)', () => {
  const result = parseFormattedText('Click [me](javascript:alert(1))');
  if (Array.isArray(result)) {
    const filtered = result.filter(p => p !== null);
    const linkElement = filtered[1];
    assert.strictEqual(linkElement.props.href, '#');
  }
});

test('parseFormattedText - nesting (bold in link)', () => {
  const result = parseFormattedText('[**bold** link](https://example.com)');
  if (Array.isArray(result)) {
    const filtered = result.filter(p => p !== null);
    const linkElement = filtered[0];
    assert.strictEqual(linkElement.type, 'a');

    const children = Array.isArray(linkElement.props.children)
      ? linkElement.props.children.filter((c: any) => c !== null)
      : [linkElement.props.children];

    const boldElement = children[0];
    assert.strictEqual(boldElement.type, 'strong');
    assert.strictEqual(boldElement.props.children, 'bold');
    assert.strictEqual(children[1], ' link');
  }
});

test('parseFormattedText - malicious html tags', () => {
  const input = 'Hello <script>alert(1)</script>';
  const result = parseFormattedText(input);
  assert.strictEqual(result, input);
});
