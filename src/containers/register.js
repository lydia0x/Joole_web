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
    isSignup: true
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }

    return isValid;
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


  render() {
    return (
      <div className={styles.background}>
        <span>
          <img className={styles.logo} src={jooleLogo} alt="Joole" />
        </span>

        <br />

        <span className={styles.title}>
          <h2> Building Product Selection Platform </h2>
        </span>

        <form className={styles.form} onSubmit={this.submitHandler}>

          <input className={styles.input_username}
            name='username'
            placeholder='Username or Email'
            onChange={this.inputChangedHandler}
          /><br />


          <input className={styles.input_password}
            type='password'
            name='password'
            placeholder='Password'
            onChange={this.inputChangedHandler}
          /><br />


          <input className={styles.input_image}
            name='image'
            placeholder='Image (URL)'
            onChange={this.inputChangedHandler}
          /><br />

          <input className={styles.input_submit}
            type='submit'
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


// import React, { Component } from 'react';
// import jooleLogo from '../assets/logo.png';

// class Register extends Component {

//   state = {
//     username: "",
//     password: "",
//     image: ""
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <span>
//           <image src={jooleLogo} alt="Joole" />
//         </span>  
//         <h1>Register</h1>

//         <label>Username</label>
//         <input
//           name='username'
//           placeholder='Username'
//         /><br />

//         <label>Password</label>
//         <input
//           type='password'
//           name='password'
//           placeholder='Password'
//         /><br />

//         <label>Image</label>
//         <input
//           name='image'
//           placeholder='Image (URL)'
//         /><br />

//         <input type='submit' />
//       </form>
//     )
//   }
// }

// export default Register;