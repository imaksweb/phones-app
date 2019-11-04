import PhonesCatalogComponent from './phones-catalog/phones-catalog.component.js';
import BaseComponent from './shared/components/base.component.js';
import { phonesService } from './phones.service.js';
import PhoneDetailsComponent from './phone-details/phone-details.component.js';
import CartComponent from './cart/cart.component.js';
import FiltersComponent from './filters/filters.component.js';

export class App extends BaseComponent {
  constructor ({ element }) {
    super({ element });
    this._render();
    this._initCatalog();
    this._initPhoneDetails();
    this._initCart();
    this._initFilters();
  }

  _initCatalog () {
    this._catalog = new PhonesCatalogComponent({
      element: this._element.querySelector('.phones-catalog')
    });
    this._catalog.show(phonesService.getAllPhones());

    this._catalog
      .subscribe('phone-select', ({ detail: delegatedTarget }) => {
        const phoneID = delegatedTarget.closest('.phone').dataset.phoneId;
        this._catalog.hide();
        this._phoneDetails.show(phonesService.getPhone(phoneID));
      })
      .subscribe('add-to-cart', ({ detail: delegatedTarget }) => {
        const phoneID = delegatedTarget.closest('.phone').dataset.phoneId;
        this._cart.add(phoneID);
      });
  }

  _initPhoneDetails () {
    this._phoneDetails = new PhoneDetailsComponent({
      element: this._element.querySelector('.phone-details')
    });
    this._phoneDetails
      .subscribe('go-back', () => {
        this._phoneDetails.hide();
        this._catalog.show();
      })
      .subscribe('add-to-cart', ({ detail: phoneID }) => {
        this._cart.add(phoneID);
      });
  }

  _initCart () {
    this._cart = new CartComponent({
      element: this._element.querySelector('.cart')
    });
  }

  _initFilters () {
    this._filters = new FiltersComponent({
      element: this._element.querySelector('.filters')
    });

    this._filters
      .subscribe('search', ({ detail: searchText }) => {
        const filteredPhones = phonesService.getAllPhones(searchText);
        this._catalog.show(filteredPhones);
      })
      .subscribe('sort', ({ detail: sortBy }) => {
        console.log(sortBy);
      });
  }

  _render () {
    this._element.innerHTML = `
    <div class="row">

      <!--Sidebar-->
      <div class="col-md-2">
        <section class="filters"></section>
        <section class="cart"></section>
      </div>

      <!--Main content-->
      <div class="col-md-10 phones-catalog"></div>
      <div class="col-md-10 phone-details"></div>
    </div>
    `;
  }
}
