import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register, login } from '../../redux/operations/authOperation';

const initialState = {
  email: '',
  password: '',
};

class AuthForm extends Component {
  state = {
    ...initialState,
  };

  // componentDidMount() {
  //   console.log('this.propsnghjhg', this.props);
  // }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const URL = this.props.match.url;
    URL === '/register' && this.props.register(this.state);
    URL === '/login' && this.props.login(this.state);
    // this.props.register(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="lable">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="input"
          />
        </label>
        <label className="lable">
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="input"
          />
        </label>
        <button type="submit" className="button">
          {this.props.location.pathname === '/register'
            ? 'Register'
            : 'Sign In'}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  register,
  login,
};
export default connect(
  null,
  mapDispatchToProps,
)(AuthForm);
