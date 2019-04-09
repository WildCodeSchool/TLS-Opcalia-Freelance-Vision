/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, NavLink
} from 'react-router-dom';
import NoteDeFrais from './NoteDeFrais';
import Profile from './Profile';
import Cra from './Cra';
import './Vision.css';

class Employee extends Component {
  render() {
    return (
      <div>
        <h2><span className="logo1">Espace</span> <span className="logo">Employé</span></h2>
        <br />
        <BrowserRouter>
          <div>
            <div className="pagePerso"><NavLink exact to="/" className="link" activeClassName="current"><span className="logo1">CRA</span></NavLink></div>
            <div className="pagePerso"><NavLink to="/Ma-note-de-frais" className="link" activeClassName="current"><span className="logo">NOTE DE FRAIS</span></NavLink></div>
            <div className="pagePerso"><NavLink to="/Mon-profile" className="link" activeClassName="current"><span className="logo1">MON PROFIL</span></NavLink></div>
            <Switch>
              <Route exact path="/" component={Cra} />
              <Route path="/Ma-note-de-frais" component={NoteDeFrais} />
              <Route path="/Mon-profile" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Employee;
