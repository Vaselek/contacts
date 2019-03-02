import API from "../../API";

export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';

export const fetchContacts = () => {
  return (dispatch, getState) => {
    dispatch(() => ({type: FETCH_CONTACTS_REQUEST}))
    API.getContacts().then((response) => {
      const contacts = response.data;
      dispatch(fetchContactsSuccess(contacts))
    }, error => {
      dispatch({FETCH_CONTACTS_FAILURE, error})
    });
  }
}

export const fetchContactsSuccess = contacts => {
  return {type: FETCH_CONTACTS_SUCCESS, contacts};
};
