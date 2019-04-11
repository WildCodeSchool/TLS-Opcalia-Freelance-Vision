/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
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
        <h2 className="logo">Gestion utilisateur </h2>
        <section>
          <div>

            <Button icon labelPosition="left" onClick={() => this.displayUserPage('Ajout')}>
              Ajouter utilisateur
              <Icon name="plus circle" />
            </Button>


            <Button icon labelPosition="left" onClick={() => this.displayUserPage('Liste')}>
              Liste utilisateurs
              <Icon name="list" />
            </Button>
          </div>

          {(actualised === 'liste') && (<UserList />)}
          {(actualised === 'add') && (<AddUser />)}
          <br />
          <div />
        </section>
      </div>
    );
  }
}

export default GestUser;
