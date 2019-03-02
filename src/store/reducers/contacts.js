import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from '../actions/contacts'

const INITIAL_STATE = {
  contacts: null,
  loading: false,
  error: null
}

const contacts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.contacts
      }
    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default contacts;
