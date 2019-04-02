import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { stringify } from 'querystring';
import UserList from './UserList'
import AddUser from './AddUser'






class GestUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            userAdd: "",
            type: "Feelance",
            id: "",
            actualised: 'liste',
            table: []
        }

    }
    displayUserPage = (page) => {
        if (page === 'Liste') {
            this.setState({ actualised: 'liste' })

        }
        else {
            this.setState({ actualised: 'add' })
        }


    }

    render() {
        // console.log(this.displayUsersName);
        const renderItem = this.state.data
        console.log(renderItem);


        return (
            <div>

                <h1>Gestion users</h1>

                <section>
                    <div><button onClick={() => this.displayUserPage('Ajout')}>Ajouter un utilisateur</button><button onClick={() => this.displayUserPage('Liste')}>Liste utilisateurs</button></div>

                    {(this.state.actualised === 'liste') && (<UserList />)}
                    {(this.state.actualised === 'add') && (<AddUser />)}
                    <hr />
                    <div>
                        <p></p>

                    </div>

                </section>

            </div>
        );
    }
}

export default GestUser;
