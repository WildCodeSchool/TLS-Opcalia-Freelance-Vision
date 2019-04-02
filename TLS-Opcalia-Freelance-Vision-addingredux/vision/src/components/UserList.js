import React, { Component } from 'react';
import "./App.css"
import axios from 'axios';
import DisplayOneUser from './DisplayOneUser'








class UserList extends Component {
    constructor(props)
    {
        super();

        this.state = {
            data: [],
        
        }
    }
   

  
    componentWillMount() {
        const t = this
        axios.get('http://localhost:4000/getusers')
            .then(function (response) {
                // handle success
                console.log(response.data);
                
               
                t.setState({ data: response.data })
            })
    }
    
 
  AddProfileItem = () => {
   
    
   

    let table = this.state.data.map((item)=>{
        return (<DisplayOneUser id={item.Identifiant} nom={item.Nom} prenom={item.Prenom} type={item.Type} />)
    })
 

    return table
    
   
    
} 
    render() {
        


        return (
            <div className="FormatProfile">
            
           {this.AddProfileItem()}
            </div>
        );
    }
}

export default UserList;
