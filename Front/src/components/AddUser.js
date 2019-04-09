import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Swal from 'sweetalert2';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {

      userAdd: '',
      type: 'Feelance',
      id: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { id, userAdd, type } = this.state;
    event.preventDefault();
    Swal.fire({
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
    }).then((result) => {
      if (result.value) {
        // console.log('je suis la');
        axios.post('http://localhost:4000/adduser', { userToAdd: userAdd, typeToAdd: type, id })
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
    return (
      <div className="add">
        <form type="post" onSubmit={handleSubmit}>
          <input required onChange={handleChange} name="id" placeholder="numéro de contrat " type="text" />
          <input required onChange={handleChange} name="userAdd" className="inputMail" placeholder="email de l'utilisateur " type="text" />
          <select name="type" onChange={handleChange}>
            <option>Freelance</option>
            <option>Employé</option>
          </select>
          <button className="buttonAdd" type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default UserList;
