import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './components/Vision.scss';

class Register extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { id, mail } = params;
    console.log(id, mail);


    return (
      <div>
        <h1 className="titleReg">Création de votre compte</h1>
        <Form className="registerForm">
          <Form.Group widths="equal">
            <Form.Input fluid label="Prénom" placeholder="Prénom" />
            <Form.Input fluid label="Nom" placeholder="Nom" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input disabled fluid label="Identifiant" value={id} placeholder="Identifiant" width={6} />
            <Form.Input fluid label="Mot de passe" placeholder="*****" width={6} />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input disabled fluid label="E-mail" value={mail} placeholder="E-mail" width={6} />
            <Form.Input fluid label="Confirmer mot de passe" placeholder="*****" width={6} />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default Register;
