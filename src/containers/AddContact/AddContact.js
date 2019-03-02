import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import connect from "react-redux/es/connect/connect";
import {addContact} from "../../store/actions/add-contact";

class AddContact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: '',
        email: '',
        phone: '',
        photo: ''
      }
    }
  }

  valueChanged = event  => {
    const {name, value} = event.target;
    let contact = {...this.state.contact};
    contact[name] = value;
    this.setState({contact});
  }

  submitHandler = (event) => {
    event.preventDefault();
    const contact = {...this.state.contact}
    this.props.addContact(contact);
    // API.addContact('/orders.json', contact).then(() => {
    //   this.props.history.replace('/');
    // });
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={(e)=>this.submitHandler(e)}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" onChange={this.valueChanged} value={this.state.contact.name} />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input type="text" name="phone" id="phone" onChange={this.valueChanged} value={this.state.contact.phone} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" onChange={this.valueChanged} value={this.state.contact.email} />
          </FormGroup>
          <FormGroup>
            <Label for="photo">Photo</Label>
            <Input type="photo" name="photo" id="photo" onChange={this.valueChanged} value={this.state.contact.photo} />
          </FormGroup>
          <Button type="submit">Save</Button>
          <Button type="button">Back to Contacts</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.addContact,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
