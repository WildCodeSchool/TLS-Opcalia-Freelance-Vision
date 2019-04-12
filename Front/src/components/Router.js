import React, { Component } from 'react';
import 'semantic-ui-react';
import {
  BrowserRouter, Switch, Route, NavLink
} from 'react-router-dom';
import NoteDeFrais from './NoteDeFrais';
import Profile from './Profile';
import Cra from './Cra';
import './Vision.css';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (

      <div>
        <BrowserRouter>
          <div>
            <div className="ui inverted segment">
              <div className="ui inverted secondary pointing menu">
                <div className="pagePerso"><NavLink class="item active" exact to="/" className="link" activeClassName="current"><span className="logo1">CRA</span></NavLink></div>
                <div className="pagePerso"><NavLink class="item" to="/Ma-note-de-frais" className="link" activeClassName="current"><span className="logo">NOTE DE FRAIS</span></NavLink></div>
                <div className="pagePerso"><NavLink class="item" to="/Mon-profile" className="link" activeClassName="current"><span className="logo1">MON PROFIL</span></NavLink></div>
              </div>
            </div>
            <Switch>
              <Route class="item active" exact path="/" component={Cra} />
              <Route class="item" path="/Ma-note-de-frais" component={NoteDeFrais} />
              <Route class="item" path="/Mon-profile" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default Router;
