import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GestUser from "./GestUser";
import GestMessage from "./GestMessage";


class Admin extends Component {
  constructor(){
    super();
    this.state=({
          Etat: 0
    })
  }



  render() {

    return (
      <div>
            
            <div className="navbar container">
  <div class="row">
   <div onClick={()=>{this.setState({Etat: 0})}} className="col-sm">
   <button>Gestion utilisateurs</button>
      
    </div>
    <div onClick={()=>{this.setState({Etat: 1})}} className="col-sm">
    <button>Gestion messages</button>
    </div>
    
  
  </div>
</div>

<div className="content">
  {(this.state.Etat === 0) && (<GestUser/>)}
  {(this.state.Etat === 1) && (<GestMessage/>)}
      </div>

      </div>
    );
  }
}

export default Admin;
