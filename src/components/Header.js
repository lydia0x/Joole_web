import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/userInfo';
import styles from './Header.module.css';

import jooleLogo from '../assets/logo.png';
import PopUp from './PopUp';

class Headers extends Component {

    userName = localStorage.getItem("username");
    url_image = localStorage.getItem("image");

    displayHomePage = () => {
        this.props.getHomePage(localStorage.getItem("token"));
    }

    goToProductPage = () => {
        this.props.history.push('/product');
    }


    state = {
        seen: false
    };

    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        return (
            <div className={styles.background_header}>
                <div className={styles.text} >{this.userName}</div>
                <div>

                    <div className={styles.btn} onClick={this.togglePop}>
                        <input className={styles.image} type="image" src={this.url_image} />
                    </div>
                    {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
                </div>

                <span>
                    <img className={styles.logo} src={jooleLogo} alt="Joole" />
                </span>



                <form className={styles.form} onSubmit={this.goToProductPage}>

                    <div>
                        <select className={styles.dropDown}>
                            <option value="air_conditioner" > Air Conditioner </option>
                            <option value="HVAC_fans" selected> HVAC Fans </option>
                            <option value="tvs" > TVs </option>
                            <option value="vacuums" > Vacuums </option>
                        </select>
                    </div>

                    <input className={styles.input_search}
                        name='search...'
                        placeholder=' search...'
                        onChange={this.inputChangedHandler}
                    />
                    <br />


                </form>




            </div>)
            ;
    };
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
        getHomePage: token => dispatch(actions.getHomePage(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Headers);