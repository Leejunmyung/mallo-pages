import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('support page exposes the app help essentials', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /<meta name="viewport"/);
  assert.match(html, /<main/);
  assert.match(html, /말로\(음성메모\)/);
  assert.match(html, /자주 묻는 질문/);
  assert.match(html, /github\.com\/Leejunmyung\/mallo-pages\/issues/);
});
