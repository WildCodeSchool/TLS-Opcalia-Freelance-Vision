/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Noty from 'noty';
import Axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import { urlServer } from '../config.json';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pass: '',
      res: '',
      etat: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkError = this.checkError.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // to do add dispatch action profile loading true
    Axios.post(`${urlServer}/login`, this.state)
      .then(res => {
        const { dispatch } = this.props;
        console.log('DATA', res.data);
        dispatch({ type: 'CREATE TOKEN USER', tokenUser: res.data.tokenUser });
        // dispatch({ type: 'CREATE_TOKEN_ADMIN', token: res.data.tokenAdmin });
        dispatch({ type: 'PROFILETYPE', profileType: res.data.result });
        dispatch({
          type: 'PROFILE',
          idProfile: res.data.id,
          nomProfile: res.data.nomProfile,
          prenomProfile: res.data.prenomProfile,
          identifiantProfile: res.data.identifiantProfile,
          typeProfile: res.data.typeProfile,
          eMailProfile: res.data.eMailProfile,
          passwordProfile: res.data.passwordProfile,
          telephoneProfile: res.data.telephoneProfile
        });
        console.log(res.data);
        this.checkError(res.data);
        // dispatch action profile loading
      }).catch(err => {
        console.log(err);
        new Noty({
          text: 'Erreur, connection au server impossible',
          type: 'error',
          theme: 'sunset',
          timeout: 2000,
        }).show();
      });
  }

  checkError(res) {
    if (res === 'badID') {
      new Noty({
        text: 'Mauvais identifiant',
        type: 'error',
        theme: 'sunset',
        timeout: 2000,
      }).show();
    }
    if (res === 'badPass') {
      new Noty({
        text: 'Mauvais mot de passe',
        type: 'error',
        theme: 'sunset',
        timeout: 2000,
      }).show();
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2><span className="logo1">FREELANCE </span>&nbsp;<span className="logo"> VISION</span></h2>
        </div>
        <Form onSubmit={this.handleSubmit} className="FormLogin">
          <h1 className="title"> Connection</h1>
          <Form.Field>
            Identifiant
            <input placeholder="Numero de contrat" name="id" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            Mot de passe
            <input type="password" placeholder="******" name="pass" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          </Form.Field>
          <Button type="submit">Valider</Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  tokenUser: store.auth.tokenUser,
  id: store.auth.idProfile
});
export default connect(mapStateToProps)(LogIn);
