import BaseComponent from '../shared/components/base.component.js';

class PhonesCatalogComponent extends BaseComponent {
  constructor ({ element }) {
    super({ element });
    this._phones = [];
    this._render();

    this
      .on('click', '.thumb', ({ delegatedTarget }) => {
        this.emit('phone-select', delegatedTarget);
      })
      .on('click', '.btn--add', ({ delegatedTarget }) => {
        this.emit('add-to-cart', delegatedTarget);
      });
  }

  show (phones) {
    this._phones = phones;
    this._render();
    super.show();
  }

  _render () {
    this._element.innerHTML = `
      <ul class="phones">
        ${this._phones.map((phone) => `
          <li class="thumbnail phone" data-phone-id=${phone.id}>
            <a href="#!/phones/${phone.id}" class="thumb">
              <img alt=${phone.name} src=${phone.imageUrl}>
            </a>
            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success btn--add">Add</a>
            </div>
            <a href="#!/phones/${phone.id}">${phone.name}</a>
            <p>${phone.snippet}</p>
          </li>
        `).join('')}
      </ul>
    `;
  }
}

export default PhonesCatalogComponent;
