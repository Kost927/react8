import React, { Component } from 'react';
import css from './Form.module.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFilter } from '../../redux/selectors/selectors';
import Filter from '../Filter/Filter';
import operation from '../../redux/operations/operations';
import contactsActions from '../../redux/contacts/contactsActions';
import ContactsList from '../contactslist/ContactsList';



class Form extends Component {

  state = {
    name: "",
    number: "",
  };

  componentDidMount() {
    this.props.fetchContacts()
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (this.props.contacts.find(contact => contact.name === this.state.name)) {
          this.props.showAlert()
          setTimeout (() => this.props.showAlert(), 2000)
        } else {
    
        this.props.onAddContact({...this.state})
        this.setState({name: "", number: ""})
        }
      };
    
      addContact = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      };

      render() {
        const { name, number } = this.state;

  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        classNames={css}
        timeout={500}
        unmountOnExit
      >
        <h2 className={css.title}>Phonebook</h2>
      </CSSTransition>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:{' '}
          <input type="text" value={name} name="name" onChange={this.addContact} />
        </label>

        <label>
          Number:{' '}
          <input
            type="tel"
            value={number}
            name="number"
            onChange={this.addContact}
          />
        </label>

        <button type="submit">Add contacts</button>
      </form>

      <h2>Contacts</h2>

{/* console.log('this.props', this.props) */}
      {this.props.contacts.length > 1 && <Filter />}
        {!this.props.error && <ContactsList />}
        {this.props.error && <h2>ERROR ...</h2>}
      
    </>
  );
}
};

const mapStateToProps = state => {
  return {
    filter: getFilter(state),
    contacts: state.contacts.items,
   
  };
};



export default connect(mapStateToProps, {
  fetchContacts: operation.fetchContacts, 
  showAlert: contactsActions.sameContact,
  onAddContact: operation.onAddContact,
})(Form);
