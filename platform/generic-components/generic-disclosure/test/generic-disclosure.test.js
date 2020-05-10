import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-disclosure.js';

describe('generic-disclosure', () => {
  it('a11y', async () => {
    const el = await fixture(html`
      <generic-disclosure
        ><button slot="toggle"></button><span slot="detail"></span
      ></generic-disclosure>
    `);

    expect(el).to.be.accessible();
  });

  it('opens and closes on click', async () => {
    const el = await fixture(html`
      <generic-disclosure
        ><button slot="toggle"></button><span slot="detail"></span
      ></generic-disclosure>
    `);

    const btn = el.querySelector('button');
    btn.click();

    expect(el.hasAttribute('expanded')).to.equal(true);
    expect(btn.getAttribute('aria-expanded')).to.equal('true');

    btn.click();

    expect(el.hasAttribute('expanded')).to.equal(false);
    expect(btn.getAttribute('aria-expanded')).to.equal('false');
  });

  it('reacts to attribute changes', async () => {
    const el = await fixture(html`
      <generic-disclosure
        ><button slot="toggle"></button><span slot="detail"></span
      ></generic-disclosure>
    `);
    const btn = el.querySelector('button');

    el.setAttribute('expanded', '');

    expect(el.hasAttribute('expanded')).to.equal(true);
    expect(btn.getAttribute('aria-expanded')).to.equal('true');

    el.removeAttribute('expanded');

    expect(el.hasAttribute('expanded')).to.equal(false);
    expect(btn.getAttribute('aria-expanded')).to.equal('false');
  });

  it('reacts to property changes', async () => {
    const el = await fixture(html`
      <generic-disclosure
        ><button slot="toggle"></button><span slot="detail"></span
      ></generic-disclosure>
    `);
    const btn = el.querySelector('button');

    el.expanded = true;

    expect(el.hasAttribute('expanded')).to.equal(true);
    expect(btn.getAttribute('aria-expanded')).to.equal('true');

    el.expanded = false;

    expect(el.hasAttribute('expanded')).to.equal(false);
    expect(btn.getAttribute('aria-expanded')).to.equal('false');
  });
});
