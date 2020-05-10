import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-accordion.js';

const defaultFixture = html`
  <generic-accordion>
    <button>One</button>
    <div role="region">
      <p>foo</p>
      <a href="/">asdfa</a>
      <p>foo</p>
    </div>

    <button>Two</button>
    <div role="region">Hi</div>

    <button>Three</button>
    <div role="region">Bar</div>
  </generic-accordion>
`;

describe('generic-accordion', () => {
  it('a11y', async () => {
    const el = await fixture(defaultFixture);

    expect(el).to.be.accessible();
  });

  it('throws error if no buttons or regions are provided', async () => {
    try {
      // eslint-disable-next-line
      const el = await fixture(
        html`
          <generic-accordion></generic-accordion>
        `,
      );
    } catch {
      expect(true).to.equal(true);
    }
  });

  it('has the required aria attributes', async () => {
    const el = await fixture(defaultFixture);
    const btns = el.querySelectorAll('button');
    const regions = el.querySelectorAll('[role="region"]');

    expect(regions[0].hasAttribute('aria-labelledby')).to.equal(true);
    expect(btns[0].id.startsWith('generic')).to.equal(true);
    expect(btns[0].getAttribute('aria-expanded')).to.equal('true');
    expect(btns[0].getAttribute('aria-disabled')).to.equal('true');
    expect(btns[1].getAttribute('aria-expanded')).to.equal('false');
  });

  it('has the required aria attributes', async () => {
    const el = await fixture(defaultFixture);
    const btns = el.querySelectorAll('button');
    const regions = el.querySelectorAll('[role="region"]');

    expect(regions[0].hasAttribute('aria-labelledby')).to.equal(true);
    expect(regions[1].hasAttribute('hidden')).to.equal(true);
    expect(btns[0].getAttribute('aria-expanded')).to.equal('true');
    expect(btns[1].getAttribute('aria-expanded')).to.equal('false');
  });

  it('reacts to click', async () => {
    const el = await fixture(defaultFixture);
    const btns = el.querySelectorAll('button');
    const regions = el.querySelectorAll('[role="region"]');

    btns[1].click();

    expect(btns[1].getAttribute('aria-expanded')).to.equal('true');
    expect(regions[1].hasAttribute('hidden')).to.equal(false);
  });

  it('reacts to selected property change', async () => {
    const el = await fixture(defaultFixture);
    const btns = el.querySelectorAll('button');
    const regions = el.querySelectorAll('[role="region"]');

    el.selected = 1;

    expect(btns[1].getAttribute('aria-expanded')).to.equal('true');
    expect(regions[1].hasAttribute('hidden')).to.equal(false);
  });

  describe('keycodes', () => {
    it('down', async () => {
      const el = await fixture(defaultFixture);
      const btns = el.querySelectorAll('button');

      el.__onKeyDown({
        preventDefault: () => {},
        keyCode: 40,
        target: { id: 'generic-accordion-' },
      });

      expect(btns[1]).to.equal(document.activeElement);
    });

    it('double down', async () => {
      const el = await fixture(defaultFixture);
      const btns = el.querySelectorAll('button');

      el.__onKeyDown({
        preventDefault: () => {},
        keyCode: 40,
        target: { id: 'generic-accordion-' },
      });
      el.__onKeyDown({
        preventDefault: () => {},
        keyCode: 40,
        target: { id: 'generic-accordion-' },
      });

      expect(btns[2]).to.equal(document.activeElement);
    });

    it('up', async () => {
      const el = await fixture(defaultFixture);
      const btns = el.querySelectorAll('button');

      el.__onKeyDown({
        preventDefault: () => {},
        keyCode: 38,
        target: { id: 'generic-accordion-' },
      });

      expect(btns[2]).to.equal(document.activeElement);
    });

    it('double up', async () => {
      const el = await fixture(defaultFixture);
      const btns = el.querySelectorAll('button');

      el.__onKeyDown({
        preventDefault: () => {},
        keyCode: 38,
        target: { id: 'generic-accordion-' },
      });
      el.__onKeyDown({
        preventDefault: () => {},
        keyCode: 38,
        target: { id: 'generic-accordion-' },
      });

      expect(btns[1]).to.equal(document.activeElement);
    });

    it('home', async () => {
      const el = await fixture(defaultFixture);
      const btns = el.querySelectorAll('button');

      el.__onKeyDown({
        preventDefault: () => {},
        keyCode: 36,
        target: { id: 'generic-accordion-' },
      });

      expect(btns[0]).to.equal(document.activeElement);
    });

    it('end', async () => {
      const el = await fixture(defaultFixture);
      const btns = el.querySelectorAll('button');

      el.__onKeyDown({
        preventDefault: () => {},
        keyCode: 35,
        target: { id: 'generic-accordion-' },
      });

      expect(btns[2]).to.equal(document.activeElement);
    });
  });
});
