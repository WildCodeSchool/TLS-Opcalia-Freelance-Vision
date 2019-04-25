/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  Form, Message, Icon
} from 'semantic-ui-react';
import Noty from 'noty';
import './components/Vision.scss';
import axios from 'axios';
import imgCheck from './components/icons8-approval-50.png';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      id: '',
      pass: '',
      mail: '',
      confirmPass: '',
      equalPass: false
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(event) {
    const { match } = this.props;
    const { params } = match;
    const { id, mail } = params;
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      id,
      mail
    });
  }

  matchPasswords() {
    const { pass, confirmPass } = this.state;
    if (pass === confirmPass) {
      return (<Form.Input type="password" fluid required name="confirmPass" label="Confirmer mot de passe" placeholder="*****" width={6} onChange={this.handleChangeInput} />);
    }
    return (<Form.Input type="password" fluid required name="confirmPass" label="Confirmer mot de passe" placeholder="*****" width={6} onChange={this.handleChangeInput} error />);
  }

  displayError() {
    const { pass, confirmPass } = this.state;
    if (pass === confirmPass && pass.length > 5) {
      return (
        <div className="bouncyIcon">
          <img alt="bounceIcon" src={imgCheck} className="animated infinite wobble delay-1s" />
        </div>
      );
    }
    return (
      <Message
        error
        header="There was some errors with your submission"
        list={[
          'You must include both a upper and lower case letters in your password.',
          'You need to select your home country.',
        ]}
      />
    );
  }

  handleSubmit() {
    console.log('SENT');

    axios.post('http://localhost:4000/configuser', this.state)
      .then(res => {
        console.log(res);
        new Noty({
          type: 'success',
          animation: {
            open: 'animated bounceInRight', // Animate.css class names
            close: 'animated bounceOutRight' // Animate.css class names
          },
          timeout: 2000,
          theme: 'sunset',
          layout: 'topRight',
          text: 'Votre profil à bien été mis à jour !'
        }).show();
      });
    console.log(this.state);
  }

  displayButton() {
    const { pass, confirmPass } = this.state;
    if (pass === confirmPass && pass.length > 5) {
      return (
        <div>
          <Form.Button color="teal" className="placeButton" content="Valider" />
        </div>
      );
    }
    return (
      <div>
        <Form.Button className="placeButton" content="Valider" disabled />
      </div>
    );
  }

  render() {
    const { match } = this.props;
    const { params } = match;
    const { id, mail } = params;
    const { pass, confirmPass } = this.state;
    console.log(id, mail);


    return (
      <div>
        <h1 className="titleReg">Création de votre compte</h1>
        <div className="registerForm">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input fluid required name="fName" label="Prénom" placeholder="Prénom" onChange={this.handleChangeInput} />
              <Form.Input fluid required name="lName" label="Nom" placeholder="Nom" onChange={this.handleChangeInput} />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input disabled required name="Id" fluid label="Identifiant" value={id} placeholder="Identifiant" width={6} onChange={this.handleChangeInput} />
              <Form.Input fluid required type="password" name="pass" label="Mot de passe" placeholder="*****" width={6} onChange={this.handleChangeInput} />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input disabled required name="mail" fluid label="E-mail" value={mail} placeholder="E-mail" width={6} onChange={this.handleChangeInput} />
              {this.matchPasswords()}
            </Form.Group>
            {/* {(pass === confirmPass) && <Button content="Valider" />} */}
            {this.displayButton()}
          </Form>
          {this.displayError()}
        </div>
      </div>
    );
  }
}
export default Register;
