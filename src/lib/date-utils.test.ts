import { test } from 'node:test';
import assert from 'node:assert';
import { formatSpanishDateToISO } from './date-utils.ts';

test('formatSpanishDateToISO - happy path', () => {
  assert.strictEqual(formatSpanishDateToISO('10 Abril 2024'), '2024-04-10');
});

test('formatSpanishDateToISO - mixed case month', () => {
  assert.strictEqual(formatSpanishDateToISO('10 ABRIL 2024'), '2024-04-10');
  assert.strictEqual(formatSpanishDateToISO('10 abril 2024'), '2024-04-10');
  assert.strictEqual(formatSpanishDateToISO('10 aBrIl 2024'), '2024-04-10');
});

test('formatSpanishDateToISO - single digit day padding', () => {
  assert.strictEqual(formatSpanishDateToISO('1 Abril 2024'), '2024-04-01');
  assert.strictEqual(formatSpanishDateToISO('01 Abril 2024'), '2024-04-01');
});

test('formatSpanishDateToISO - extra whitespace', () => {
  assert.strictEqual(formatSpanishDateToISO('  10  Abril  2024  '), '2024-04-10');
  assert.strictEqual(formatSpanishDateToISO('10\tAbril\n2024'), '2024-04-10');
});

test('formatSpanishDateToISO - invalid formats', () => {
  assert.strictEqual(formatSpanishDateToISO('10 Abril'), '10 Abril');
  assert.strictEqual(formatSpanishDateToISO('10 Abril 2024 extra'), '10 Abril 2024 extra');
  assert.strictEqual(formatSpanishDateToISO(''), '');
});

test('formatSpanishDateToISO - invalid month', () => {
  assert.strictEqual(formatSpanishDateToISO('10 Inventado 2024'), '10 Inventado 2024');
});

test('formatSpanishDateToISO - non-numeric day or year', () => {
  assert.strictEqual(formatSpanishDateToISO('abc Abril 2024'), 'abc Abril 2024');
  assert.strictEqual(formatSpanishDateToISO('10 Abril def'), '10 Abril def');
});

test('formatSpanishDateToISO - all months', () => {
  assert.strictEqual(formatSpanishDateToISO('1 Enero 2024'), '2024-01-01');
  assert.strictEqual(formatSpanishDateToISO('1 Febrero 2024'), '2024-02-01');
  assert.strictEqual(formatSpanishDateToISO('1 Marzo 2024'), '2024-03-01');
  assert.strictEqual(formatSpanishDateToISO('1 Abril 2024'), '2024-04-01');
  assert.strictEqual(formatSpanishDateToISO('1 Mayo 2024'), '2024-05-01');
  assert.strictEqual(formatSpanishDateToISO('1 Junio 2024'), '2024-06-01');
  assert.strictEqual(formatSpanishDateToISO('1 Julio 2024'), '2024-07-01');
  assert.strictEqual(formatSpanishDateToISO('1 Agosto 2024'), '2024-08-01');
  assert.strictEqual(formatSpanishDateToISO('1 Septiembre 2024'), '2024-09-01');
  assert.strictEqual(formatSpanishDateToISO('1 Octubre 2024'), '2024-10-01');
  assert.strictEqual(formatSpanishDateToISO('1 Noviembre 2024'), '2024-11-01');
  assert.strictEqual(formatSpanishDateToISO('1 Diciembre 2024'), '2024-12-01');
});
