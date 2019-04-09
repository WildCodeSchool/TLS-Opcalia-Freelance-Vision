/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
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
              <Button>Gestion utilisateurs</Button>

            </div>
            <div onClick={() => { this.setState({ Etat: 1 }); }} className="col-sm">
              <Button>Gestion messages auto</Button>
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
