import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import DisplayOneUser from './DisplayOneUser';
import { IP } from '../config.json';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.AddProfileItem = this.AddProfileItem.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    axios.get(`http://${IP}:4000/getusers`)
      .then((response) => {
        // handle success
        dispatch({ type: 'USER LIST', userTable: response.data });
      });
  }


  AddProfileItem() {
    const { userTable } = this.props;
    const table = userTable.map((item) => (
      <DisplayOneUser
        id={item.Identifiant}
        nom={item.Nom}
        prenom={item.Prenom}
        userType={item.userType}
      />
    ));
    return table;
  }

  render() {
    return (
      <div className="FormatProfile">
        <br />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Identifiant</Table.HeaderCell>
              <Table.HeaderCell>Nom</Table.HeaderCell>
              <Table.HeaderCell>Prénom</Table.HeaderCell>
              <Table.HeaderCell>Type utilisateur</Table.HeaderCell>
              <Table.HeaderCell>Carte grise</Table.HeaderCell>
              <Table.HeaderCell>Supprimer utilisateur</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.AddProfileItem()}
          </Table.Body>
        </Table>


      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  userTable: store.auth.userTable,
});
export default connect(mapStateToProps)(UserList);
