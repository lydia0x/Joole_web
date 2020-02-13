import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import styles from './login.module.css';

import jooleLogo from '../assets/logo.png';

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    inputChangedHandler = (event) => {
        // console.log(...this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.userLogin(this.state);
    }

    goToSignUp = () => {
        this.props.history.push('/register');
    }

    render() {
        return (
            <div className={styles.background}>

                <input type='submit' value='Sign up' className={styles.flat} onClick={this.goToSignUp}/>

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
                    />
                    <br />

                    <input className={styles.input_password}
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={this.inputChangedHandler}
                    />
                    <br />

                    <input className={styles.input_submit}
                        type='submit' 
                        value='Log in'
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
        userLogin: (user) => dispatch(actions.userLogin(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);



