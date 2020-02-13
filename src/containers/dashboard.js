import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/userInfo';
import styles from './dashboard.module.css';

import jooleLogo from '../assets/logo.png';
import PopUp from '../components/PopUp';

class Dashboard extends Component {

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
            <div className={styles.background}>
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


                <br />

                <span className={styles.title}>
                    <h3> Building Product Selection Platform </h3>
                </span>



                <form className={styles.form} onSubmit={this.goToProductPage}>

                    <div>
                        <select className={styles.dropDown}>
                            <option value="mechanical">Mechanical</option>
                            <option value="industrial">Industrial</option>
                            <option value="sport">Sport</option>
                            <option value="vehicle">Vehicle</option>
                        </select>
                    </div>

                    <input className={styles.input_search}
                        list="mechanical"
                        name='search...'
                        placeholder=' search...'
                        onChange={this.inputChangedHandler}
                    />
                    <datalist id="mechanical">
                        <option value="Air Conditioner" />
                        <option value="HVAC Fans" />
                        <option value="TVs" />
                        <option value="Vacuums" />
                        <option value="Washing Machine & Dryer" />
                    </datalist>
                    <br />

                    <input className={styles.input_submit}
                        type='submit'
                        value='Search'
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);