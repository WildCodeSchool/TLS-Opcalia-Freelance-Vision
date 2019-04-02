import React, { Component } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';

class GestUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      actualised: 'liste',
    };
    this.displayUserPage = this.displayUserPage.bind(this);
  }

  displayUserPage(page) {
    if (page === 'Liste') {
      this.setState({ actualised: 'liste' });
    } else {
      this.setState({ actualised: 'add' });
    }
  }

  render() {
    const { data, actualised } = this.state;
    // console.log(this.displayUsersName);
    const renderItem = data;
    console.log(renderItem);


    return (
      <div>
        <h1>Gestion users</h1>
        <section>
          <div><button type="button" onClick={() => this.displayUserPage('Ajout')}>Ajouter un utilisateur</button><button type="button" onClick={() => this.displayUserPage('Liste')}>Liste utilisateurs</button></div>

          {(actualised === 'liste') && (<UserList />)}
          {(actualised === 'add') && (<AddUser />)}
          <hr />
          <div />
        </section>
      </div>
    );
  }
}

export default GestUser;
