import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-tooltip.js';

describe('generic-tooltip', () => {
  it('a11y', async () => {
    const el = await fixture(html`
      <generic-tooltip>
        <div slot="target">Hi im the target</div>
        <span slot="tooltip">Im a tooltip</span>
      </generic-tooltip>
    `);

    expect(el).to.be.accessible();
  });
});
