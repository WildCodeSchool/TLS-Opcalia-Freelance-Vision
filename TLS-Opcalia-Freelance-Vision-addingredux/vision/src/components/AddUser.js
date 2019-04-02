import React, { Component } from 'react';
import "./App.css"
import axios from 'axios';
import DisplayUsers from './DisplayOneUser'
import Swal from 'sweetalert2'









class UserList extends Component {
    constructor(props)
    {
        super();

        this.state = {
          
          userAdd: "",
          type: "Feelance",
          id: "",
          actualised: 'liste',
          table: []
      }
    }
   

  

    handleChange = (event) => {
      console.log(event.target.value);
      console.log(event.target.name);
      this.setState({ [event.target.name]: event.target.value })
  }


  handleSubmit = (event) => {
      event.preventDefault();

     
      
      
      Swal.fire({
          title: "<strong>êtes vous en accord avec les informations de l'utilisateur ?</strong>",
          type: 'info',
          html:
              '<h3>Identifiant: </h3>' + '<p>' + this.state.id + '</p>' + '<h3>Email: </h3>' + '<p>' + this.state.userAdd + '</p>' + '<h3>Type: </h3>' + '<p>' + this.state.type + '</p>',
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
              axios.post('http://localhost:4000/adduser', { "userToAdd": this.state.userAdd, "typeToAdd": this.state.type, "id": this.state.id })
                  .then(function (response) {
                      console.log(response.data);
                  })
              Swal.fire(
                  'Ok!',
                  "L'utilisateur à bien été enregistré",
                  'success'
              )
          }

      })



  }
    
 
 
    render() {
        


        return (
                 <div className="add">
                        <form type="post" onSubmit={this.handleSubmit} >
                            <input required onChange={this.handleChange} name="id"  placeholder="numéro de contrat " type="text" />
                            <input required onChange={this.handleChange} name="userAdd" className="inputMail" placeholder="email de l'utilisateur " type="text" />
                            <select name="type" onChange={this.handleChange}>
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
