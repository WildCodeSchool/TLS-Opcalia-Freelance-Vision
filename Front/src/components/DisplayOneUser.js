import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';


class DisplayOneUser extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.removeUser = this.removeUser.bind(this);
  }


  // eslint-disable-next-line class-methods-use-this
  removeUser(id) {
    console.log(typeof (id));
    Axios.post('http://localhost:4000/removeuser', { userToremove: id })
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    const {
      type, nom, id, prenom
    } = this.props;
    return (
      <div>
        <div className="Profile">
          <p className="inline logo1"><h4 className="logo">Identifiant: &nbsp;</h4> {id}</p>
          <p className="inline logo1"><h4 className="logo">Nom: &nbsp;</h4> {nom}</p>
          <p className="inline logo1"><h4 className="logo">Prénom: &nbsp;</h4> {prenom}</p>
          <p className="inline logo1"><h4 className="logo">Type: &nbsp;</h4>
            {(type === 'F') && ('Freelance')}
            {(type === 'A') && ('Admin')}
            {(type === 'E') && ('Employé')}
          </p>
          {(type !== 'A') && (<input type="button" value="Supprimer" className="ButtonEnvoye1" onClick={() => this.removeUser(id)} />)}
        </div>
      </div>
    );
  }
}

export default DisplayOneUser;
