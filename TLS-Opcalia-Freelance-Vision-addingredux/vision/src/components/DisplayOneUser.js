import React, { Component } from 'react';
import "./App.css"
import axios from 'axios';







class DisplayOneUser extends Component {
   



  

    removeUser = (id) => {
      console.log(typeof (id));
      axios.post('http://localhost:4000/removeuser', { "userToremove": id })
          .then(function (response) {
              console.log(response.data);
          })
  }
 
    render() {
        


        return (
            <div className="FormatProfile">
            <br/>
            <br/>
           <p className="inline"><h2>Identifiant: &nbsp;</h2> {this.props.id}</p>
           <p className="inline"><h2>Nom: &nbsp;</h2> {this.props.nom}</p>
           <p className="inline"><h2>Prénom: &nbsp;</h2> {this.props.prenom}</p>
           <p className="inline"><h2>Type: &nbsp;</h2> 
           {(this.props.type === 'F') && ('Freelance')}
           {(this.props.type === 'A') && ('Admin')}
           {(this.props.type === 'E') && ('Employé')}</p>
           {(this.props.type !== 'A') && (<input type="button" value="Supprimer" onClick={()=>this.removeUser(this.props.id)}/>)}
            <br/>
            <br/>
            
            </div>
        );
    }
}

export default DisplayOneUser;
