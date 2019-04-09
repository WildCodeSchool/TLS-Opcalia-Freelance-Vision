import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';


class DisplayOneUser extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.removeUser = this.removeUser.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  removeUser(identif) {
    const { userTable, dispatch } = this.props;
    console.log(typeof (identif));
    axios.post('http://localhost:4000/removeuser', { userToremove: identif })
      .then((response) => {
        console.log(response.data);
      });

    // const copyTable = [...userTable];
    const table = userTable.filter((item) => item.Identifiant !== identif);
    dispatch({ type: 'USER LIST', userTable: table });
    console.log(table);
  }

  render() {
    const {
      userType, nom, id, prenom, userTable
    } = this.props;
    console.log(userTable);
    return (
      <div className="FormatProfile">
        <br />
        <br />
        <p className="inline"><h2>Identifiant: &nbsp;</h2> {id}</p>
        <p className="inline"><h2>Nom: &nbsp;</h2> {nom}</p>
        <p className="inline"><h2>Prénom: &nbsp;</h2> {prenom}</p>
        <p className="inline"><h2>Type utilisateur: &nbsp;</h2>{userType} </p>
        {(userType !== 'Admin') && (<input type="button" value="Supprimer" onClick={() => this.removeUser(id)} />)}
        <br />
        <br />

      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  userTable: store.auth.userTable,

});
export default connect(mapStateToProps)(DisplayOneUser);
