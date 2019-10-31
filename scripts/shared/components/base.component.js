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
}

export default BaseComponent;
