import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayOneUser from './DisplayOneUser';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.AddProfileItem = this.AddProfileItem.bind(this);
  }

  componentWillMount() {
    // const t = this;
    axios.get('http://localhost:4000/getusers')
      .then((response) => {
        // handle success
        console.log('response.data', response.data);
        this.setState({ data: response.data });
      });
  }

  AddProfileItem() {
    const { data } = this.state;
    const table = data.map((item) => (
      <DisplayOneUser id={item.Identifiant} nom={item.Nom} prenom={item.Prenom} type={item.Type} />
    ));
    return table;
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
