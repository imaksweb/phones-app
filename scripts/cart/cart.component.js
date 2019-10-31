import BaseComponent from '../shared/components/base.component.js';

class CartComponent extends BaseComponent {
  constructor ({ element }) {
    super({ element });
    this._phones = {};

    this
      .on('click', '.btn--remove', ({ delegatedTarget: { dataset: { phoneId } } }) => {
        this._phones[phoneId] -= 1;

        if (this._phones[phoneId] === 0) {
          delete this._phones[phoneId];
        }
        this._render();
      });
  }

  add (phoneID) {
    if (!this._phones[phoneID]) {
      this._phones[phoneID] = 1;
      this._render();
      return;
    }
    this._phones[phoneID] += 1;
    this._render();
  }

  _render () {
    this._element.innerHTML = `
      <p>Shopping Cart</p>
      <ul>
        ${Object.entries(this._phones).map(([phoneId, count]) => `
          <li>${phoneId} - ${count}шт.</li>
          <button class="btn--remove" data-phone-id=${phoneId}>x</button>
        `).join('')}
      </ul>
    `;
  }
};

export default CartComponent;
