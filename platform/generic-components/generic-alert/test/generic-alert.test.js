import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-alert.js';

describe('generic-alert', () => {
  it('a11y', async () => {
    const el = await fixture(html`
      <generic-alert></generic-alert>
    `);

    expect(el).to.be.accessible();
  });

  it('has correct aria attributes', async () => {
    const el = await fixture(html`
      <generic-alert></generic-alert>
    `);

    expect(el.getAttribute('role')).to.equal('alert');
    expect(el.getAttribute('aria-live')).to.equal('assertive');
    expect(el.getAttribute('aria-atomic')).to.equal('true');
  });
});
