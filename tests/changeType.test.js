import path from 'path';
import { JSDOM } from 'jsdom';

describe('toggleVisibility', () => {
  let dom;

  beforeEach(async () => {
    dom = new JSDOM(`<!doctype html><html><body>
      <div id="title-secction-ing"></div>
      <div id="title-secction-ing-proyect"></div>
      <div id="service-ing-container" class="hidden"></div>
      <div id="service-ren-container" class="visible"></div>
    </body></html>`, { url: 'http://localhost' });

    global.window = dom.window;
    global.document = dom.window.document;
    global.localStorage = dom.window.localStorage;

    const modulePath = path.resolve('src/scripts/changeType.js');
    await import(modulePath);

    dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  });

  afterEach(() => {
    dom.window.close();
    delete global.window;
    delete global.document;
    delete global.localStorage;
  });

  test('shows ing container and hides ren container', () => {
    window.toggleVisibility('ing');

    const ing = document.getElementById('service-ing-container');
    const ren = document.getElementById('service-ren-container');

    expect(ing.classList.contains('visible')).toBe(true);
    expect(ing.classList.contains('hidden')).toBe(false);
    expect(ren.classList.contains('hidden')).toBe(true);
    expect(ren.classList.contains('visible')).toBe(false);
  });
});
