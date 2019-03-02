import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILURE,
  FETCH_CONTACTS_REQUEST,
} from '../actions/add-contact'

const INITIAL_STATE = {
  contact: null,
  loading: false,
  error: null
}

const addContact = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case ADD_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default addContact;
