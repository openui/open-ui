import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-visually-hidden.js';

describe('generic-visually-hidden', () => {
  it('a11y', async () => {
    const el = await fixture(html`
      <generic-visually-hidden></generic-visually-hidden>
    `);

    expect(el).to.be.accessible();
  });
});
