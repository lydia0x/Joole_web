import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import styles from './register.module.css';

import jooleLogo from '../assets/logo.png';


class Register extends Component {
  state = {
    username: "",
    password: "",
    image: "",
    isSignup: true,

    // submitting: true
  }

  inputChangedHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitHandler = (event) => {

    const users = {
      username: this.state.username,
      password: this.state.password,
      image: this.state.image
    };

    event.preventDefault();
    this.props.userRegister(users);
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  }

  goToSignIn = () => {
    this.props.history.push('/login');
}


  render() {
    return (
      <div className={styles.background}>

        <input type='submit' value='Sign in' className={styles.flat} onClick={this.goToSignIn} />

        <span>
          <img className={styles.logo} src={jooleLogo} alt="Joole" />
        </span>

        <br />

        <span className={styles.title}>
          <h3> Building Product Selection Platform </h3>
        </span>

        <form className={styles.form} onSubmit={this.submitHandler}>

          <input className={styles.input_username}
            name='username'
            placeholder='Username or Email'
            onChange={this.inputChangedHandler}
            required
          /><br />


          <input className={styles.input_password}
            type='password'
            name='password'
            placeholder='Password'
            onChange={this.inputChangedHandler}
            required
          /><br />


          <input className={styles.input_image}
            name='image'
            placeholder='Image (URL)'
            onChange={this.inputChangedHandler}
            required
          /><br />

          <input className={styles.input_submit}
            type='submit'
            // disabled={this.state.submitting}
          />

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    userRegister: (user) => dispatch(actions.userRegister(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

