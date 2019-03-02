import axios from 'axios';

const BASE_URL = 'https://test-project-694b7.firebaseio.com/';

const API = {
  addContact: (contact) => axios.post(BASE_URL + 'contacts.json', contact),
  editContact: () => axios.get(BASE_URL + 'contacts.json'),
  getContacts: () => axios.get(BASE_URL + 'contacts.json'),
}

export default API;
