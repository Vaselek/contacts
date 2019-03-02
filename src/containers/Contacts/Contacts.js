import React, {Component} from 'react';
import Contact from "../../components/Contact";
import {connect} from "react-redux";
import {fetchContacts} from '../../store/actions/contacts'

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts()
  }
  render() {
    // debugger;
    console.log(this.props.contacts)
    let contacts = <div>No contacts</div>;
    if (this.props.contacts) {
      contacts = Object.keys(this.props.contacts).map(contactId => {
        debugger;
        const contact = this.props.contacts[contactId]
        return (
          <Contact key={contactId} id={contactId} name={contact.name} photo={contact.photo}/>
        )
      })
    }
    return (
      <div>
        <h3>Contacts</h3>
        <div className="container">
          {contacts}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: (contacts) => dispatch(fetchContacts(contacts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
