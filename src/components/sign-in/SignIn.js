import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';

import './SignIn.scss';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            id="email"
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="passowrd"
            name="password"
            value={this.state.password}
            id="password"
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
