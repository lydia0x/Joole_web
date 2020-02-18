import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter 
} from "react-router-dom";
import { connect } from 'react-redux';


import './App.module.css';
import * as actions from '../actions/auth';

import Login from '../containers/login';
import Register from '../containers/register';
import Dashboard from '../containers/dashboard';
import Product from '../containers/product';
import Detail from '../containers/detail';
import Comparator from '../containers/comparator';
import Logout from '../containers/logout';


class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact={true} component={Login} />
        <Route path="**" component={Login} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/product" component={Product} />
          <Route path="/detail" component={Detail} />
          <Route path="/comparator" component={Comparator} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="**" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/detail">Detail</Link>
              </li>
              <li>
                <Link to="/comparator">Comparator</Link>
              </li>
            </ul>
          </nav> */}

          {routes}

        </div>
      </Router>
    );
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
