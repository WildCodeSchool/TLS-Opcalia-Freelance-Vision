import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


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
    axios.post('http://localhost:4000/removeuser', { userToremove: id })
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    const {
      type, nom, id, prenom
    } = this.props;
    return (
      <div className="FormatProfile">
        <br />
        <br />
        <p className="inline"><h2>Identifiant: &nbsp;</h2> {id}</p>
        <p className="inline"><h2>Nom: &nbsp;</h2> {nom}</p>
        <p className="inline"><h2>Prénom: &nbsp;</h2> {prenom}</p>
        <p className="inline"><h2>Type: &nbsp;</h2>
          {(type === 'F') && ('Freelance')}
          {(type === 'A') && ('Admin')}
          {(type === 'E') && ('Employé')}
        </p>
        {(type !== 'A') && (<input type="button" value="Supprimer" onClick={() => this.removeUser(id)} />)}
        <br />
        <br />

      </div>
    );
  }
}

export default DisplayOneUser;
