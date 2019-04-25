/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Vision.scss';
import {
  Button, Icon, Form, Input, Select
} from 'semantic-ui-react';
import 'react-dropzone-uploader/dist/styles.css';
import Axios from 'axios';
import { Progress } from 'reactstrap';
import Noty from 'noty';
import { IP } from '../config.json';


class Profile extends Component {
  constructor(props) {
    super(props);
    // Je charge le state de mon component Profile avec les props recues du parent
    this.state = {
      id: props.id,
      greyCard: '',
      nom: props.nom,
      prenom: props.prénom,
      identifiant: props.identifiant,
      email: props.eMail,
      type: props.userType,
      loaded: 0
    };
    this.postProfile = this.postProfile.bind(this);
    this.postFiles = this.postFiles.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  handleChange(event) {
    console.log('ON CHANGE', event.target);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSelectChange(value) {
    this.setState({ type: value });
  }

  handleFileChange(event) {
    this.setState({ [event.target.name]: event.target.files[0] });
  }

  postProfile(event) {
    event.preventDefault();
    const { eMail } = this.props;
    const {
      identifiant,
      nom,
      prenom,
      id,
    } = this.state;
    Axios.post(`http://${IP}:4000/updateProfile`, {
      id,
      eMail,
      changeIdentifiant: identifiant,
      changeNom: nom,
      changePrenom: prenom,
    })
      .then(res => {
        console.log('RES', res);

        if (res.status === 200) {
          console.log('SUCCESS');
          new Noty({
            text: 'Informations mises à jour',
            type: 'success',
            theme: 'sunset',
            timeout: 2000,
          }).show();
        } else {
          new Noty({
            text: 'Une erreur est survenue',
            type: 'warning',
            theme: 'sunset',
          }).show();
        }
      });
  }

  postFiles(event) {
    event.preventDefault();
    const { greyCard } = this.state;
    const file = new FormData();
    file.append('file', greyCard);
    console.log('greyCard', greyCard);
    Axios.post(`http://${IP}:4000/sendFiles`, file, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        });
      }
    })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    const {
      nom, prenom, identifiant, type, email, loaded
    } = this.state;
    console.log('state', this.state);
    const typeOptions = [
      { key: 'admin', text: 'Administrateur', value: 'Admin' },
      { key: 'freelance', text: 'Freelance', value: 'Freelance' },
      { key: 'employee', text: 'Employee', value: 'Employee' }
    ];

    return (
      <div>
        <div className="profile">
          <Form onSubmit={this.postProfile}>
            <Form.Field>
              <label>Nom:</label>
              <Input type="text" name="nom" id="nom" placeholder="Nom..." value={nom} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Prénom:</label>
              <Input type="text" name="prenom" id="prenom" placeholder="Prénom..." value={prenom} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Identifiant:</label>
              <Input type="text" name="identifiant" id="identifiant" value={identifiant} placeholder="Identifiant..." onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Email:</label>
              <Input type="text" name="email" id="email" value={email} placeholder="Email..." onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Type:</label>
              <Select name="type" placeholder="Type..." value={type} options={typeOptions} onChange={(e, { value }) => this.handleSelectChange(value)} />
            </Form.Field>
            <div>
              <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Sauvegarder</Button>
            </div>
          </Form>
          <Form onSubmit={this.postFiles}>
            <h4>Sélectionner la carte grise à envoyer:</h4>
            <div id="carteGrise" />
            <input className="ButtonEnvoye" id="carteGrise" name="greyCard" type="file" onChange={this.handleFileChange} /><br />
            <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Envoyer fichiers </Button>
            <Progress max="100" color="success" value={loaded}>{Math.round(loaded, 2)}%</Progress>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  tokenUser: store.auth.tokenUser,
  nom: store.auth.nomProfile,
  id: store.auth.idProfile,
  prénom: store.auth.prenomProfile,
  identifiant: store.auth.identifiantProfile,
  userType: store.auth.typeProfile,
  eMail: store.auth.eMailProfile,
  password: store.auth.passwordProfile
});


export default connect(mapStateToProps)(Profile);
