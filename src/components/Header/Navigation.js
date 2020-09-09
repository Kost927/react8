import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import authActions from "../../redux/auth/authActions";

function Navigation({isAuth, onLogOut}) {
  return (
    <>
    
      {isAuth ?
      
      ( <ul>
       <li>
       <NavLink to="/contacts">
         Contacts
       </NavLink>
     </li>
     <li>
     <NavLink onClick={() => onLogOut()} to="/register">
       Log Out
     </NavLink>
   </li>
   </ul>
   ) : ( 
   <ul>
      <li>
      <h2>For using the PhoneBook, you have to register or logIn please!!!</h2>
        <NavLink to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          Log In
        </NavLink>
      </li> 
      </ul>)
    }
   
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.onAuth.token,
    // onLogOut: state.auth.onAuth
  };
};

const mapDispatchToProps = {
  onLogOut: authActions.logoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);