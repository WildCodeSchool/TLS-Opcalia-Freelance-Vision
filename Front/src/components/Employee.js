/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import {
  BrowserRouter, Switch, Route, NavLink
} from 'react-router-dom';
import NoteDeFrais from './NoteDeFrais';
import Profile from './Profile';
import Cra from './Cra';
import './Vision.css';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'Cra' }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state;
    return (
      // <div>
        // <h2><span className="logo1">Espace</span> <span className="logo">Employé</span></h2>
        // <br />
      //   <BrowserRouter>
      //     <div>
      //       <div className="ui inverted segment">
      //         <div className="ui inverted secondary pointing menu">
      //           <div className="pagePerso"><NavLink class="item active" exact to="/" className="link" activeClassName="current"><span className="logo1">CRA</span></NavLink></div>
      //           <div className="pagePerso"><NavLink class="item" to="/Ma-note-de-frais" className="link" activeClassName="current"><span className="logo">NOTE DE FRAIS</span></NavLink></div>
      //           <div className="pagePerso"><NavLink class="item" to="/Mon-profile" className="link" activeClassName="current"><span className="logo1">MON PROFIL</span></NavLink></div>
      //         </div>
      //       </div>
      //       <Switch>
      //         <Route exact path="/" component={Cra} />
      //         <Route path="/Ma-note-de-frais" component={NoteDeFrais} />
      //         <Route path="/Mon-profile" component={Profile} />
      //       </Switch>
      //     </div>
      //   </BrowserRouter>
      // </div>
      <div>
          
        <Segment color= 'teal'inverted>
        <Menu 
         inverted pointing secondary>
          <Menu.Item name='Cra' active={activeItem === 'Cra'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Profil'
            active={activeItem === 'Profil'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Note de frais'
            active={activeItem === 'Note de frais'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
      {(activeItem === 'Cra') && (<Cra/>)}
      {(activeItem === 'Profil') && (<Profile/>)}
      {(activeItem === 'Note de frais') && (<NoteDeFrais/>)}

      </div>
      
    );
  }
}

export default Employee;
