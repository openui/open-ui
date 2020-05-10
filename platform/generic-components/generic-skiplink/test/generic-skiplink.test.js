import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-skiplink.js';

describe('generic-skiplink', () => {
  it('a11y', async () => {
    const el = await fixture(html`
      <generic-skiplink></generic-skiplink>
    `);

    expect(el).to.be.accessible();
  });

  it('correctly renders the `for` attribute', async () => {
    const el = await fixture(html`
      <generic-skiplink for="main"></generic-skiplink>
    `);

    expect(el.shadowRoot.querySelector('a').getAttribute('href')).to.equal('#main');
  });
});
