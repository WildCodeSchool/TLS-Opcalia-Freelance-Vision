/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Button, Icon } from 'semantic-ui-react';
import { urlServer } from '../config.json';


class DisplayOneUser extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.removeUser = this.removeUser.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  removeUser(identif) {
    const { userTable, dispatch, tokenUser } = this.props;
    const config = {
      headers: {
        Authorization: `Bearer ${tokenUser}`
      }
    };
    console.log(typeof (identif));
    axios.post(`${urlServer}/removeuser`, { userToremove: identif }, config)
      .then((response) => {
        console.log(response.data);
      });

    // const copyTable = [...userTable];
    const table = userTable.filter((item) => item.Identifiant !== identif);
    dispatch({ type: 'USER LIST', userTable: table });
    console.log(table);
  }

  DispatchUserId(id) {
    const { dispatch } = this.props;
    dispatch({ type: 'USER ID', id });
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
        <Table.Cell></Table.Cell>
        <Table.Cell> {(userType !== 'Admin')
          && (
            <div>
              <Button color="teal" as={Link} onClick={() => this.DispatchUserId(id)} content="CRA" to="/tableCra" />
              <Button color="teal" as={Link} onClick={() => this.DispatchUserId(id)} content="Note de frais" to="/tableNoteDeFrais" />
              <Button color="teal" content="fichier" />
              <Button color="red" icon onClick={() => this.removeUser(id)}>
                <Icon name="x" />
              </Button>
            </div>
          )
        }
        </Table.Cell>
      </Table.Row>
    );
  }
}
const mapStateToProps = (store) => ({
  userTable: store.auth.userTable,
  tokenUser: store.auth.tokenUser,
});
export default connect(mapStateToProps)(DisplayOneUser);
