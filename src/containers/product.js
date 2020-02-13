import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/userInfo';
import Header from '../components/Header';

import styles from './product.module.css';


class Product extends Component {
    
    displayHomePage = () => {
        this.props.getHomePage(localStorage.getItem("token"));
    }
    
    render() {
        return (
        <div>
            <Header></Header>
            <div></div>
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
        getHomePage: token => dispatch( actions.getHomePage(token) )
    };
  };
  
export default connect( mapStateToProps, mapDispatchToProps )( Product );