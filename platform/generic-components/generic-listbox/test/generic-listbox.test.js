import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-listbox.js';

const defaultFixture = html`
  <generic-listbox label="list of items">
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
      <li>item 6</li>
      <li>item 7</li>
      <li>item 8</li>
      <li>item 9</li>
      <li>item 10</li>
      <li>item 11</li>
      <li>item 12</li>
      <li>item 13</li>
      <li>item 14</li>
      <li>item 15</li>
      <li>item 16</li>
      <li>item 17</li>
    </ul>
  </generic-listbox>
`;

describe('generic-listbox', () => {
  it('a11y', async () => {
    const el = await fixture(defaultFixture);

    expect(el).to.be.accessible();
  });

  it('has the required aria attributes', async () => {
    const el = await fixture(defaultFixture);

    const ul = el.querySelector('ul');
    const firstLi = el.querySelectorAll('li')[0];
    const secondLi = el.querySelectorAll('li')[1];

    // ul
    expect(ul.getAttribute('role')).to.equal('listbox');
    expect(ul.getAttribute('tabindex')).to.equal('0');
    expect(ul.getAttribute('aria-label')).to.equal('list of items');
    expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-0');

    // 1st list item
    expect(firstLi.id).to.equal('generic-listbox-0');
    expect(firstLi.getAttribute('role')).to.equal('option');
    expect(firstLi.getAttribute('aria-selected')).to.equal('true');
    expect(firstLi.hasAttribute('selected')).to.equal(true);

    // 2nd list item
    expect(secondLi.id).to.equal('generic-listbox-1');
    expect(secondLi.getAttribute('role')).to.equal('option');
    expect(secondLi.hasAttribute('aria-selected')).to.equal(false);
    expect(secondLi.hasAttribute('selected')).to.equal(false);
  });

  it('changes selected on click', async () => {
    const el = await fixture(defaultFixture);

    const ul = el.querySelector('ul');
    const firstLi = el.querySelectorAll('li')[1];

    expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-0');
    expect(firstLi.hasAttribute('aria-selected')).to.equal(false);
    expect(firstLi.hasAttribute('selected')).to.equal(false);

    firstLi.click();

    expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-1');
    expect(firstLi.getAttribute('aria-selected')).to.equal('true');
    expect(firstLi.hasAttribute('selected')).to.equal(true);
  });

  it('reacts to selected property changed', async () => {
    const el = await fixture(defaultFixture);

    const ul = el.querySelector('ul');
    const firstLi = el.querySelectorAll('li')[1];

    expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-0');
    expect(firstLi.hasAttribute('aria-selected')).to.equal(false);
    expect(firstLi.hasAttribute('selected')).to.equal(false);

    el.selected = 1;

    expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-1');
    expect(firstLi.getAttribute('aria-selected')).to.equal('true');
    expect(firstLi.hasAttribute('selected')).to.equal(true);
  });

  describe('keycodes', () => {
    it('up', async () => {
      const el = await fixture(defaultFixture);
      const ul = el.querySelector('ul');
      const li = el.querySelectorAll('li');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 38, target: { localName: 'ul' } });

      expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-16');
      expect(li[16].getAttribute('aria-selected')).to.equal('true');
      expect(li[16].hasAttribute('selected')).to.equal(true);
    });

    it('down', async () => {
      const el = await fixture(defaultFixture);
      const ul = el.querySelector('ul');
      const li = el.querySelectorAll('li');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 40, target: { localName: 'ul' } });
      expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-1');
      expect(li[1].getAttribute('aria-selected')).to.equal('true');
      expect(li[1].hasAttribute('selected')).to.equal(true);
    });

    it('end and home', async () => {
      const el = await fixture(defaultFixture);
      const ul = el.querySelector('ul');
      const li = el.querySelectorAll('li');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 35, target: { localName: 'ul' } });

      expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-16');
      expect(li[16].getAttribute('aria-selected')).to.equal('true');
      expect(li[16].hasAttribute('selected')).to.equal(true);

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 36, target: { localName: 'ul' } });

      expect(ul.getAttribute('aria-activedescendant')).to.equal('generic-listbox-0');
      expect(li[0].getAttribute('aria-selected')).to.equal('true');
      expect(li[0].hasAttribute('selected')).to.equal(true);
    });
  });
});
