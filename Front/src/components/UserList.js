import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
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
    const t = this;
    const { dispatch } = this.props;
    axios.get('http://localhost:4000/getusers')
      .then((response) => {
        // handle success
        console.log('JE SUIS UN LOG');
        console.log(response.data);
        t.setState({ data: response.data });
        dispatch({ type: 'USER LIST', userTable: response.data });
      });
  }


  AddProfileItem() {
    const { userTable } = this.props;
    const table = userTable.map((item) => (
      <DisplayOneUser
        id={item.Identifiant}
        nom={item.Nom}
        prenom={item.Prenom}
        userType={item.userType}
      />
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

const mapStateToProps = (store) => ({
  userTable: store.auth.userTable,
});
export default connect(mapStateToProps)(UserList);
