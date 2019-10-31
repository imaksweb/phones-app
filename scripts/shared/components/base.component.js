class BaseComponent {
  constructor ({ element }) {
    this._element = element;
  }

  show () {
    this._element.hidden = false;
  }

  hide () {
    this._element.hidden = true;
  }

  on (eventName, selector, cb) {
    this._element.addEventListener(eventName, (e) => {
      const el = e.target.closest(selector);

      if (el) {
        e.delegatedTarget = el;
        cb(e);
      }
    });
    return this;
  }

  emit (eventName, detail) {
    // eslint-disable-next-line no-undef
    const customEvent = new CustomEvent(eventName, { detail });
    this._element.dispatchEvent(customEvent);
  }

  subscribe (eventName, cb) {
    this._element.addEventListener(eventName, cb);
    return this;
  }
}

export default BaseComponent;
