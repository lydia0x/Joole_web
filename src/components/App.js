import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Login from '../containers/login';
import Register from '../containers/register';
import Dashboard from '../containers/dashboard';
import Product from '../containers/product';
import Detail from '../containers/detail';
import Comparator from '../containers/comparator';


function App() {
    return (
      <Router>
        <div>
          <nav>
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
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/product" component={Product}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/comparator" component={Comparator}/>
            <Route path='/' exact={true} component={Login} />
            <Route path="**" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    );
  }
  

  

export default App;
