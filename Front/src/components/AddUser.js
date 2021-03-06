/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import generator from 'generate-password';
import {
  Input,
  Select,
  Button,
  Form,
} from 'semantic-ui-react';
import { urlServer } from '../config.json';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {

      userAdd: '',
      type: 'Freelance',
      id: '',
      password: generator.generate({
        length: 8,
        numbers: true
      }),
    };
    this.handleChange = this.handleChange.bind(this);
    this.swalCheck = this.swalCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  swalCheck() {
    const { id, userAdd, type } = this.state;
    return (Swal.fire({
      title: "<strong>êtes vous en accord avec les informations de l'utilisateur ?</strong>",
      type: 'info',
      html:
        `${'<h3>Identifiant: </h3>'
        + '<p>'}${id}</p>`
        + '<h3>Email: </h3>'
        + `<p>${userAdd}</p>`
        + '<h3>Type: </h3>'
        + `<p>${type}</p>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Valider',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> Annuler',
      cancelButtonAriaLabel: 'Thumbs down',
    })
    );
  }

  handleSubmit(event) {
    const {
      id, userAdd, type, password
    } = this.state;
    const { tokenUser } = this.props;
    event.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${tokenUser}`
      }
    };
    this.swalCheck().then((result) => {
      if (result.value) {
        // console.log('je suis la');
        axios.post(`${urlServer}/adduser`, {
          userToAdd: userAdd, typeToAdd: type, id, password
        }, config)
          .then((response) => {
            console.log('response.data', response.data);
          });
        Swal.fire(
          'Ok!',
          "L'utilisateur à bien été enregistré",
          'success'
        );
      }
    });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { password } = this.state;

    const types = ['Freelance', 'Employé'].map(item => ({
      key: item,
      text: item,
      value: item,
    }));

    return (
      <div className="add">
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Input required onChange={handleChange} name="id" placeholder="numéro de contrat " type="text" icon="users" iconPosition="left" />
          </Form.Field>
          <Form.Field>
            <Input required onChange={handleChange} name="userAdd" placeholder="Adresse e-mail" type="text" icon="mail" iconPosition="left" />
          </Form.Field>
          <Form.Field>
            <Input required onChange={handleChange} name="password" placeholder="Mot de passe" type="text" value={password} icon="key" iconPosition="left" />
          </Form.Field>
          <Form.Field>
            <Select placeholder="Selectionner un type d'utilisateur" options={types} name="type" onChange={handleChange} />
          </Form.Field>
          <Button className="buttonAdd" type="submit" content="Ajouter" icon="check" labelPosition="right" />
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  tokenUser: store.auth.tokenUser,
});
export default connect(mapStateToProps)(UserList);
