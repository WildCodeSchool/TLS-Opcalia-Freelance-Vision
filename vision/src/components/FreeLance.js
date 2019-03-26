import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, NavLink
} from 'react-router-dom';
import Profile from './Profile';
import Cra from './Cra';
import './Cra.css';

class FreeLance extends Component {
  render() {
    return (
      <div>
        <h2><span className="logo1">Espace</span> <span className="logo">FreeLance</span></h2>
        <br />
        <BrowserRouter>
          <div>
            <div className="pagePerso"><NavLink exact to="/" activeClassName="current"><span className="logo1">CRA</span></NavLink></div>
            <div className="pagePerso"><NavLink to="/Mon-profile" activeClassName="current"><span className="logo">MON PROFILE</span></NavLink></div>
            <Switch>
              <Route exact path="/" component={Cra} />
              <Route path="/Mon-profile" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default FreeLance;
