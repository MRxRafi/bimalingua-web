import { test } from 'node:test';
import assert from 'node:assert';
import { formatSpanishDateToISO } from './date-utils.ts';

test('formatSpanishDateToISO - happy path', () => {
  assert.strictEqual(formatSpanishDateToISO('10 Abril 2024'), '2024-04-10');
  assert.strictEqual(formatSpanishDateToISO('1 Enero 2023'), '2023-01-01');
  assert.strictEqual(formatSpanishDateToISO('31 Diciembre 2022'), '2022-12-31');
});

test('formatSpanishDateToISO - case insensitivity for month', () => {
  assert.strictEqual(formatSpanishDateToISO('10 abril 2024'), '2024-04-10');
  assert.strictEqual(formatSpanishDateToISO('10 ABRIL 2024'), '2024-04-10');
});

test('formatSpanishDateToISO - invalid month name', () => {
  const input = '10 Inventado 2024';
  assert.strictEqual(formatSpanishDateToISO(input), input);
});

test('formatSpanishDateToISO - non-numeric year', () => {
  const input = '10 Abril ABCD';
  assert.strictEqual(formatSpanishDateToISO(input), input);
});

test('formatSpanishDateToISO - non-numeric day', () => {
  const input = 'XY Abril 2024';
  assert.strictEqual(formatSpanishDateToISO(input), input);
});

test('formatSpanishDateToISO - invalid number of parts', () => {
  assert.strictEqual(formatSpanishDateToISO('10 Abril'), '10 Abril');
  assert.strictEqual(formatSpanishDateToISO('10 Abril 2024 Extra'), '10 Abril 2024 Extra');
});

test('formatSpanishDateToISO - whitespace handling', () => {
  assert.strictEqual(formatSpanishDateToISO('  10 Abril 2024  '), '2024-04-10');
  assert.strictEqual(formatSpanishDateToISO('10   Abril   2024'), '2024-04-10');
});

test('formatSpanishDateToISO - empty string', () => {
  assert.strictEqual(formatSpanishDateToISO(''), '');
});
