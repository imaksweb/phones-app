import BaseComponent from '../shared/components/base.component.js';

class PhoneDetailsComponent extends BaseComponent {
  constructor ({ element, onBack }) {
    super({ element });
    this._onBack = onBack;
    this._element.addEventListener('click', (e) => {
      const backBtn = e.target.closest('.btn--back');
      const imgEl = e.target.closest('.thumb');

      if (backBtn) {
        this._onBack();
        return;
      }

      if (imgEl) {
        this._currentImage.src = imgEl.src;
      }
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
    <button>Add to basket</button>


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
