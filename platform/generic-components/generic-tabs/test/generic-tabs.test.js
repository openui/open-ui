import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-tabs.js';

const tabsFixture = html`
  <generic-tabs>
    <button slot="tab">
      Jim
    </button>
    <div slot="panel">
      My name is Jim.
    </div>

    <button slot="tab">
      Jack
    </button>
    <div slot="panel">
      And I am Jack.
    </div>
  </generic-tabs>
`;

const tabsFixtureSelected = html`
  <generic-tabs selected="1">
    <button slot="tab">
      Jim
    </button>
    <div slot="panel">
      My name is Jim. Im not opened by default.
    </div>

    <button slot="tab">
      Jack
    </button>
    <div slot="panel">
      And I am Jack. I am opened by default.
    </div>
  </generic-tabs>
`;

describe('generic-tabs', () => {
  it('a11y', async () => {
    const el = await fixture(html`
      <generic-tabs></generic-tabs>
    `);

    expect(el).to.be.accessible();
  });

  it('has required aria attributes', async () => {
    const el = await fixture(tabsFixture);
    const tablist = el.shadowRoot.querySelector('[role="tablist"]');
    const panel = el.querySelector('div[slot="panel"]');
    const button = el.querySelector('button[slot="tab"]');

    expect(tablist.getAttribute('role')).to.equal('tablist');
    expect(tablist.getAttribute('aria-label')).to.equal('tablist');

    expect(panel.getAttribute('role')).to.equal('tabpanel');
    expect(panel.hasAttribute('aria-labelledby')).to.equal(true);

    expect(button.getAttribute('role')).to.equal('tab');
    expect(button.getAttribute('aria-selected')).to.equal('true');
    expect(button.hasAttribute('aria-controls')).to.equal(true);
    expect(button.hasAttribute('selected')).to.equal(true);
  });

  it('activates first tab by default', async () => {
    const el = await fixture(tabsFixture);
    const buttons = el.querySelectorAll('button');

    expect(buttons[0].getAttribute('aria-selected')).to.equal('true');
    expect(buttons[0].hasAttribute('selected')).to.equal(true);

    expect(buttons[1].getAttribute('aria-selected')).to.equal('false');
    expect(buttons[1].hasAttribute('selected')).to.equal(false);
    expect(buttons[1].getAttribute('tabindex')).to.equal('-1');
  });

  it('activates the tab if theres an selected attribute', async () => {
    const el = await fixture(tabsFixtureSelected);
    const buttons = el.querySelectorAll('button');

    expect(buttons[1].getAttribute('aria-selected')).to.equal('true');
    expect(buttons[1].hasAttribute('selected')).to.equal(true);

    expect(buttons[0].getAttribute('aria-selected')).to.equal('false');
    expect(buttons[0].hasAttribute('selected')).to.equal(false);
    expect(buttons[0].getAttribute('tabindex')).to.equal('-1');
  });

  it('reacts to selected property changed', async () => {
    const el = await fixture(tabsFixture);
    el.selected = 1;
    const buttons = el.querySelectorAll('button');

    expect(buttons[1].getAttribute('aria-selected')).to.equal('true');
    expect(buttons[1].hasAttribute('selected')).to.equal(true);

    expect(buttons[0].getAttribute('aria-selected')).to.equal('false');
    expect(buttons[0].hasAttribute('selected')).to.equal(false);
    expect(buttons[0].getAttribute('tabindex')).to.equal('-1');
  });

  it('reacts to selected attribute changed', async () => {
    const el = await fixture(tabsFixture);
    el.setAttribute('selected', '1');
    const buttons = el.querySelectorAll('button');

    expect(buttons[1].getAttribute('aria-selected')).to.equal('true');
    expect(buttons[1].hasAttribute('selected')).to.equal(true);

    expect(buttons[0].getAttribute('aria-selected')).to.equal('false');
    expect(buttons[0].hasAttribute('selected')).to.equal(false);
    expect(buttons[0].getAttribute('tabindex')).to.equal('-1');
  });

  it('reacts to click', async () => {
    const el = await fixture(tabsFixture);

    const buttons = el.querySelectorAll('button');

    buttons[1].click();

    expect(buttons[1].getAttribute('aria-selected')).to.equal('true');
    expect(buttons[1].hasAttribute('selected')).to.equal(true);

    expect(buttons[0].getAttribute('aria-selected')).to.equal('false');
    expect(buttons[0].hasAttribute('selected')).to.equal(false);
    expect(buttons[0].getAttribute('tabindex')).to.equal('-1');

    buttons[0].click();

    expect(buttons[0].getAttribute('aria-selected')).to.equal('true');
    expect(buttons[0].hasAttribute('selected')).to.equal(true);

    expect(buttons[1].getAttribute('aria-selected')).to.equal('false');
    expect(buttons[1].hasAttribute('selected')).to.equal(false);
    expect(buttons[1].getAttribute('tabindex')).to.equal('-1');
  });

  describe('keycodes', () => {
    it('left', async () => {
      const el = await fixture(tabsFixture);
      const buttons = el.querySelectorAll('button');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 37 });

      expect(buttons[1].getAttribute('aria-selected')).to.equal('true');
      expect(buttons[1].hasAttribute('selected')).to.equal(true);

      expect(buttons[0].getAttribute('aria-selected')).to.equal('false');
      expect(buttons[0].hasAttribute('selected')).to.equal(false);
      expect(buttons[0].getAttribute('tabindex')).to.equal('-1');
    });

    it('double left', async () => {
      const el = await fixture(tabsFixture);
      const buttons = el.querySelectorAll('button');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 37 });
      el.__onKeyDown({ preventDefault: () => {}, keyCode: 37 });

      expect(buttons[0].getAttribute('aria-selected')).to.equal('true');
      expect(buttons[0].hasAttribute('selected')).to.equal(true);

      expect(buttons[1].getAttribute('aria-selected')).to.equal('false');
      expect(buttons[1].hasAttribute('selected')).to.equal(false);
      expect(buttons[1].getAttribute('tabindex')).to.equal('-1');
    });

    it('right', async () => {
      const el = await fixture(tabsFixture);
      const buttons = el.querySelectorAll('button');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 39 });

      expect(buttons[1].getAttribute('aria-selected')).to.equal('true');
      expect(buttons[1].hasAttribute('selected')).to.equal(true);

      expect(buttons[0].getAttribute('aria-selected')).to.equal('false');
      expect(buttons[0].hasAttribute('selected')).to.equal(false);
      expect(buttons[0].getAttribute('tabindex')).to.equal('-1');
    });

    it('double right', async () => {
      const el = await fixture(tabsFixture);
      const buttons = el.querySelectorAll('button');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 39 });
      el.__onKeyDown({ preventDefault: () => {}, keyCode: 39 });

      expect(buttons[0].getAttribute('aria-selected')).to.equal('true');
      expect(buttons[0].hasAttribute('selected')).to.equal(true);

      expect(buttons[1].getAttribute('aria-selected')).to.equal('false');
      expect(buttons[1].hasAttribute('selected')).to.equal(false);
      expect(buttons[1].getAttribute('tabindex')).to.equal('-1');
    });

    it('home', async () => {
      const el = await fixture(tabsFixture);
      const buttons = el.querySelectorAll('button');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 36 });

      expect(buttons[0].getAttribute('aria-selected')).to.equal('true');
      expect(buttons[0].hasAttribute('selected')).to.equal(true);

      expect(buttons[1].getAttribute('aria-selected')).to.equal('false');
      expect(buttons[1].hasAttribute('selected')).to.equal(false);
      expect(buttons[1].getAttribute('tabindex')).to.equal('-1');
    });

    it('end', async () => {
      const el = await fixture(tabsFixture);
      const buttons = el.querySelectorAll('button');

      el.__onKeyDown({ preventDefault: () => {}, keyCode: 35 });

      expect(buttons[1].getAttribute('aria-selected')).to.equal('true');
      expect(buttons[1].hasAttribute('selected')).to.equal(true);

      expect(buttons[0].getAttribute('aria-selected')).to.equal('false');
      expect(buttons[0].hasAttribute('selected')).to.equal(false);
      expect(buttons[0].getAttribute('tabindex')).to.equal('-1');
    });
  });
});
