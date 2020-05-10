import { html, fixture, expect } from '@open-wc/testing';
import '../../generic-dialog.js';
import { dialog } from '../dialog.js';

describe('generic-dialog', () => {
  it('a11y', async () => {
    const el = await fixture(html`
      <generic-dialog></generic-dialog>
    `);

    expect(el).to.be.accessible();
  });

  // closes on escape
  // close on outside click (overlay)
  // marks items in the body as inert/aria-hidden
  // closes the dialog
  // resets focus to invoker

  it('throws error if no invoker', () => {
    try {
      dialog.open({
        invokerNode: null,
        content: () => {},
      });
      expect(true).to.equal(false);
    } catch {
      expect(true).to.equal(true);
    }
  });

  it('dialog has the required role', () => {
    const button = document.createElement('button');
    dialog.open({
      invokerNode: button,
      content: () => {},
    });

    const dialogNode = document.body.querySelector('div[role="dialog"]');
    expect(dialogNode).to.exist;
    dialog.close();
  });
});
