import BaseComponent from '../shared/components/base.component.js';

class PhoneDetailsComponent extends BaseComponent {
  constructor ({ element }) {
    super({ element });

    this
      .on('click', '.thumb', ({ delegatedTarget: { src } }) => {
        this._currentImage.src = src;
      })
      .on('click', '.btn--back', () => {
        this.emit('go-back');
      })
      .on('click', '.btn--add', () => {
        this.emit('add-to-cart', this._phone.id);
      });
  }

  show (phone) {
    this._phone = phone;
    this._render();
    this._currentImage = this._element.querySelector('img.phone');
    [this._currentImage.src] = this._phone.images;
    super.show();
  }

  _render () {
    this._element.innerHTML = `
    <div>

    <img class="phone">

    <button class="btn--back">Back</button>
    <button class="btn--add">Add to basket</button>


    <h1>${this._phone.name}</h1>

    <p>${this._phone.description}</p>

    <ul class="phone-thumbs">
      ${this._phone.images.map((src) => `
        <li>
          <img class="thumb" src="${src}">
        </li>
      `).join('')}  
    </ul>
  </div>
    `;
  }
}

export default PhoneDetailsComponent;
