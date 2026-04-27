import { test } from 'node:test';
import assert from 'node:assert';
import { sendEmail } from './contact.ts';

test('sendEmail validation - missing name', async () => {
  const formData = new FormData();
  formData.append('email', 'test@example.com');
  formData.append('phone', '123456789');
  formData.append('message', 'Hello');
  formData.append('consent', 'true');

  const result = await sendEmail(formData);
  assert.deepStrictEqual(result, { error: "Todos los campos son obligatorios, incluyendo el número de teléfono y el consentimiento RGPD." });
});

test('sendEmail validation - missing email', async () => {
  const formData = new FormData();
  formData.append('name', 'John Doe');
  formData.append('phone', '123456789');
  formData.append('message', 'Hello');
  formData.append('consent', 'true');

  const result = await sendEmail(formData);
  assert.deepStrictEqual(result, { error: "Todos los campos son obligatorios, incluyendo el número de teléfono y el consentimiento RGPD." });
});

test('sendEmail validation - missing phone', async () => {
  const formData = new FormData();
  formData.append('name', 'John Doe');
  formData.append('email', 'test@example.com');
  formData.append('message', 'Hello');
  formData.append('consent', 'true');

  const result = await sendEmail(formData);
  assert.deepStrictEqual(result, { error: "Todos los campos son obligatorios, incluyendo el número de teléfono y el consentimiento RGPD." });
});

test('sendEmail validation - missing message', async () => {
  const formData = new FormData();
  formData.append('name', 'John Doe');
  formData.append('email', 'test@example.com');
  formData.append('phone', '123456789');
  formData.append('consent', 'true');

  const result = await sendEmail(formData);
  assert.deepStrictEqual(result, { error: "Todos los campos son obligatorios, incluyendo el número de teléfono y el consentimiento RGPD." });
});

test('sendEmail validation - missing consent', async () => {
  const formData = new FormData();
  formData.append('name', 'John Doe');
  formData.append('email', 'test@example.com');
  formData.append('phone', '123456789');
  formData.append('message', 'Hello');

  const result = await sendEmail(formData);
  assert.deepStrictEqual(result, { error: "Todos los campos son obligatorios, incluyendo el número de teléfono y el consentimiento RGPD." });
});
