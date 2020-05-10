import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-switch.js';

describe('generic-switch', () => {
  it('a11y', async () => {
    const el = await fixture(html`
      <generic-switch></generic-switch>
    `);

    expect(el).to.be.accessible();
  });

  it('has role switch and tabindex 0', async () => {
    const el = await fixture(html`
      <generic-switch></generic-switch>
    `);
    const btn = el.shadowRoot.querySelector('.button');

    expect(btn.getAttribute('role')).to.equal('switch');
    expect(btn.getAttribute('tabindex')).to.equal('0');
  });

  it('is checked on click', async () => {
    const el = await fixture(html`
      <generic-switch></generic-switch>
    `);

    const btn = el.shadowRoot.querySelector('.button');

    btn.click();

    expect(btn.getAttribute('aria-checked')).to.equal('true');
    expect(btn.hasAttribute('checked')).to.equal(true);
    expect(el.hasAttribute('checked')).to.equal(true);
  });

  it('toggles on enter', async () => {
    const el = await fixture(html`
      <generic-switch></generic-switch>
    `);
    const btn = el.shadowRoot.querySelector('.button');

    el.__onKeyDown({
      keyCode: 13,
      preventDefault: () => {},
    });

    expect(btn.getAttribute('aria-checked')).to.equal('true');
    expect(btn.hasAttribute('checked')).to.equal(true);
    expect(el.hasAttribute('checked')).to.equal(true);

    el.__onKeyDown({
      keyCode: 13,
      preventDefault: () => {},
    });

    expect(btn.getAttribute('aria-checked')).to.equal('false');
    expect(btn.hasAttribute('checked')).to.equal(false);
    expect(el.hasAttribute('checked')).to.equal(false);
  });

  it('toggles on space', async () => {
    const el = await fixture(html`
      <generic-switch></generic-switch>
    `);
    const btn = el.shadowRoot.querySelector('.button');

    el.__onKeyDown({
      keyCode: 32,
      preventDefault: () => {},
    });

    expect(btn.getAttribute('aria-checked')).to.equal('true');
    expect(btn.hasAttribute('checked')).to.equal(true);
    expect(el.hasAttribute('checked')).to.equal(true);

    el.__onKeyDown({
      keyCode: 32,
      preventDefault: () => {},
    });

    expect(btn.getAttribute('aria-checked')).to.equal('false');
    expect(btn.hasAttribute('checked')).to.equal(false);
    expect(el.hasAttribute('checked')).to.equal(false);
  });

  it('reacts to disabled attribute change', async () => {
    const el = await fixture(html`
      <generic-switch></generic-switch>
    `);
    const btn = el.shadowRoot.querySelector('.button');

    el.setAttribute('disabled', '');

    expect(btn.getAttribute('aria-checked')).to.equal('false');
    expect(btn.hasAttribute('aria-disabled')).to.equal(true);
    expect(el.hasAttribute('disabled')).to.equal(true);

    el.removeAttribute('disabled');

    expect(btn.getAttribute('aria-checked')).to.equal('false');
    expect(btn.hasAttribute('aria-disabled')).to.equal(false);
    expect(el.hasAttribute('disabled')).to.equal(false);
  });

  it('reacts to checked attribute change', async () => {
    const el = await fixture(html`
      <generic-switch></generic-switch>
    `);
    el.setAttribute('checked', '');

    const btn = el.shadowRoot.querySelector('.button');

    expect(btn.getAttribute('aria-checked')).to.equal('true');
    expect(btn.hasAttribute('checked')).to.equal(true);
    expect(el.hasAttribute('checked')).to.equal(true);

    el.removeAttribute('checked');

    expect(btn.getAttribute('aria-checked')).to.equal('false');
    expect(btn.hasAttribute('checked')).to.equal(false);
    expect(el.hasAttribute('checked')).to.equal(false);
  });

  it('is unchecked when clicked again', async () => {
    const el = await fixture(html`
      <generic-switch checked></generic-switch>
    `);

    el.shadowRoot.querySelector('div').click();
    const btn = el.shadowRoot.querySelector('.button');

    expect(btn.getAttribute('aria-checked')).to.equal('false');
    expect(btn.hasAttribute('checked')).to.equal(false);
    expect(el.hasAttribute('checked')).to.equal(false);
  });

  it('sets required aria attributes on checked', async () => {
    const el = await fixture(html`
      <generic-switch checked></generic-switch>
    `);
    const btn = el.shadowRoot.querySelector('.button');

    expect(btn.getAttribute('aria-checked')).to.equal('true');
    expect(btn.hasAttribute('checked')).to.equal(true);
    expect(el.hasAttribute('checked')).to.equal(true);
  });

  it('does not check when disabled', async () => {
    const el = await fixture(html`
      <generic-switch disabled>foo</generic-switch>
    `);

    el.shadowRoot.querySelector('.button').click();

    expect(el.hasAttribute('checked')).to.equal(false);
  });
});
