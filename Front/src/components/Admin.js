/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import GestUser from './GestUser';
import GestMessage from './GestMessage';


class Admin extends Component {
  constructor() {
    super();
    this.state = ({
      Etat: 0
    });
  }

  render() {
    const { Etat } = this.state;
    return (
      <div>

        <div className="navbar container">
          <div className="row">
            <div onClick={() => { this.setState({ Etat: 0 }); }} className="col-sm">
              <button type="button" className="ButtonEnvoye1">Gestion utilisateurs</button>&nbsp;&nbsp;

            </div>
            <div onClick={() => { this.setState({ Etat: 1 }); }} className="col-sm">
              <button type="button" className="ButtonEnvoye1">Gestion messages</button>
            </div>


          </div>
        </div>
        <br />
        <br />

        <div className="content">
          {(Etat === 0) && (<GestUser />)}
          {(Etat === 1) && (<GestMessage />)}
        </div>

      </div>
    );
  }
}

export default Admin;
