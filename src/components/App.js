import React from "react";
import "./App.module.css";
// import ContactsList from "./contactslist/ContactsList";
// import Form from "./Form/Form";
import Alert from "./Alert/Alert";

import { connect } from 'react-redux';
import Header from "./Header/Header";
import Main from "./Main/Main";


const App = ({alertActive}) => {

    return (
      <>
      <Header/>
      <Main/>
      {alertActive && <Alert/>}
        {/* <ContactsList/> */}
      </>
    );
  }

const mapStateToProos = state => {
  return {
    alertActive: state.contacts.alert
  };
};





export default connect(mapStateToProos)(App);
