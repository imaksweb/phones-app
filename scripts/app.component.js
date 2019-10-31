import PhonesCatalogComponent from './phones-catalog/phones-catalog.component.js';
import BaseComponent from './shared/components/base.component.js';
import { phonesService } from './phones.service.js';
import PhoneDetailsComponent from './phone-details/phone-details.component.js';
import CartComponent from './cart/cart.component.js';

export class App extends BaseComponent {
  constructor ({ element }) {
    super({ element });
    this._render();
    this._initCatalog();
    this._initPhoneDetails();
    this._initCart();
  }

  _initCatalog () {
    this._catalog = new PhonesCatalogComponent({
      element: this._element.querySelector('.phones-catalog'),
      phones: phonesService.getAllPhones(),
      onPhoneSelect: (phoneID) => {
        this._catalog.hide();
        this._phoneDetails.show(phonesService.getPhone(phoneID));
      }
    });
  }

  _initPhoneDetails () {
    this._phoneDetails = new PhoneDetailsComponent({
      element: this._element.querySelector('.phone-details'),
      onBack: () => {
        this._phoneDetails.hide();
        this._catalog.show();
      },
      onAdd: (phoneID) => {
        this._cart.add(phoneID);
      }
    });
  }

  _initCart () {
    this._cart = new CartComponent({
      element: this._element.querySelector('.cart')
    });
  }

  _render () {
    this._element.innerHTML = `
    <div class="row">

      <!--Sidebar-->
      <div class="col-md-2">
        <section>
          <p>
            Search:
            <input>
          </p>

          <p>
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
          </p>
        </section>

        <section class="cart"></section>
      </div>

      <!--Main content-->
      <div class="col-md-10 phones-catalog"></div>
      <div class="col-md-10 phone-details"></div>
    </div>
    `;
  }
}
