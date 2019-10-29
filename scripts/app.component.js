import PhonesCatalogComponent from './phones-catalog/phones-catalog.component.js';
import BaseComponent from './shared/components/base.component.js';
import { phonesService } from './phones.service.js';
import PhoneDetailsComponent from './phone-details/phone-details.component.js';

export class App extends BaseComponent {
  constructor ({ element }) {
    super({ element });
    this._render();
    this._initCatalog();
    this._phoneDetails = new PhoneDetailsComponent({
      element: this._element.querySelector('.phone-details')
    });
  }

  _initCatalog () {
    this._catalog = new PhonesCatalogComponent({
      element: this._element.querySelector('.phones-catalog'),
      phones: phonesService.getAllPhones(),
      onPhoneSelect: (phoneID) => {
        this._catalog.hide();
        this._phoneDetails.show(phoneID);
      }
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

        <section>
          <p>Shopping Cart</p>
          <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
          </ul>
        </section>
      </div>

      <!--Main content-->
      <div class="col-md-10 phones-catalog"></div>
      <div class="col-md-10 phone-details"></div>
    </div>
    `;
  }
}
