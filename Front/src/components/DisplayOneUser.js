import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { Table } from 'semantic-ui-react';


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
      <Table.Row>
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{nom}</Table.Cell>
        <Table.Cell>{prenom}</Table.Cell>
        <Table.Cell>{userType}</Table.Cell>
        <Table.Cell> {(userType !== 'Admin') && (<input type="button" value="Supprimer" onClick={() => this.removeUser(id)} />)}</Table.Cell>
      </Table.Row>
    );
  }
}
const mapStateToProps = (store) => ({
  userTable: store.auth.userTable,

});
export default connect(mapStateToProps)(DisplayOneUser);
