export class EventTargetShim {
  constructor() {
    const delegate = document.createDocumentFragment();
    this.addEventListener = delegate.addEventListener.bind(delegate);
    this.dispatchEvent = delegate.dispatchEvent.bind(delegate);
    this.removeEventListener = delegate.removeEventListener.bind(delegate);
  }
}
