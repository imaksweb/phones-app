import { mockedPhones, mockedPhone } from './../mockedData.js';

class PhonesService {
  getAllPhones () {
    return mockedPhones;
  }

  getPhone () {
    return mockedPhone;
  }
}

export const phonesService = new PhonesService();
