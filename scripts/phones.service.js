import { mockedPhones, mockedPhone } from './../mockedData.js';

class PhonesService {
  getAllPhones (query) {
    return this._filter(query, mockedPhones);
  }

  getPhone () {
    return mockedPhone;
  }

  _filter (query, phones) {
    if (!query) {
      return phones;
    }
    return phones.filter((phone) => {
      return phone.name.toLowerCase().includes(query.toLowerCase());
    });
  }
}

export const phonesService = new PhonesService();
