import API from '../../API'

export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE';
export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';

export const addContact = (contact) => {
  return (dispatch, getState) => {
    dispatch(() => ({type: ADD_CONTACT_REQUEST}))
    API.addContact(contact).then(() => {
      dispatch(() => ({type: ADD_CONTACT_SUCCESS}));
      dispatch(() => ({type: FETCH_CONTACTS_REQUEST}));
      window.location = '/';
    }, error => {
      dispatch({ADD_CONTACT_FAILURE, error})
    });
  }
};

