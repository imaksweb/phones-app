import { mockedPhones, mockedPhone } from './../mockedData.js';

class PhonesService {
  getAllPhones ({ query, orderBy }) {
    const filteredPhones = this._filter(query, mockedPhones);
    return this._sort(orderBy, filteredPhones);
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

  _sort (orderBy, phones) {
    if (!orderBy) {
      return phones;
    }

    phones.sort((phone1, phone2) => {
      if (phone1[orderBy] > phone2[orderBy]) {
        return 1;
      }
      if (phone1[orderBy] < phone2[orderBy]) {
        return -1;
      }
      return 0;
    });

    return phones;
  }
}

export const phonesService = new PhonesService();
