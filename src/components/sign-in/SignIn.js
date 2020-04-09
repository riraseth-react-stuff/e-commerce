import React, { Component } from 'react';

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
          <input
            type="email"
            name="email"
            value={this.state.email}
            id="email"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="passowrd"
            name="password"
            value={this.state.password}
            id="password"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
