/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
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
import dateFns from 'date-fns';
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
      telephone: props.telephone,
      prenom: props.prénom,
      identifiant: props.identifiant,
      eMail: props.eMail,
      type: props.userType,
      loaded: 0,
      loadingFile: false,
      loadingForm: false
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

  componentWillMount() {
    const { id } = this.props;
    const date = new Date();
    const formatedDate = dateFns.format(date, 'MMMM YYYY');
    Axios.post(`https:${IP}:4000/getImgProfile`, { id, formatedDate })
      .then(res => {
        console.log(res);
      });
  }

  postProfile(event) {
    event.preventDefault();
    this.setState({ loadingForm: true });
    const {
      identifiant,
      nom,
      prenom,
      id,
      telephone,
      eMail
    } = this.state;
    Axios.post(`https://${IP}:4000/updateProfile`, {
      id,
      changeEmail: eMail,
      changeIdentifiant: identifiant,
      changeNom: nom,
      changePrenom: prenom,
      changeTelephone: telephone
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
          this.setState({ loadingForm: false });
        }
      }).catch(err => {
        console.log(err);
        new Noty({
          text: 'Erreur',
          type: 'warning',
          theme: 'sunset',
        }).show();
      });
  }

  postFiles(event) {
    event.preventDefault();
    const { greyCard } = this.state;
    this.setState({ loadingFile: true });
    const { id } = this.props;
    const file = new FormData();
    const date = new Date();
    const formatedDate = dateFns.format(date, 'MMMM YYYY');
    console.log(formatedDate);
    file.append('file', greyCard);
    console.log('File', file);
    console.log('greyCard', greyCard);
    Axios.post(`https://${IP}:4000/sendFiles?id=${id}&date=${formatedDate}`, file, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        });
      }
    })
      .then(res => {
        const { dispatch, uploadImg } = this.props;
        console.log(res);
        if (res.status === 200) {
          const tableImg = uploadImg;
          tableImg.push(greyCard.name);
          dispatch({ type: 'CREATE_UPLOAD_IMG', uploadImg: tableImg });
          console.log('SUCCESS');
          new Noty({
            text: 'Fichier envoyé',
            type: 'success',
            theme: 'sunset',
            timeout: 2000,
          }).show();
          this.setState({ loadingFile: false });
        }
      }).catch(err => {
        console.log(err);
        new Noty({
          text: 'Erreur',
          type: 'warning',
          theme: 'sunset',
        }).show();
      });
  }

  render() {
    const {
      telephone, nom, prenom, identifiant, type, eMail, loaded, loadingFile, loadingForm
    } = this.state;
    console.log('state', this.state);
    const typeOptions = [
      { key: 'freelance', text: 'Freelance', value: 'Freelance' },
      { key: 'employee', text: 'Employee', value: 'Employee' }
    ];

    return (
      <div>
        <div className="profile">
          <Form onSubmit={this.postProfile} loading={loadingForm}>
            <Form.Field>
              <label>Nom:</label>
              <Input type="text" name="nom" id="nom" placeholder="Nom..." value={nom} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Prénom:</label>
              <Input type="text" name="prenom" id="prenom" placeholder="Prénom..." value={prenom} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>N° de téléphone:</label>
              <Input type="text" name="telephone" id="telephone" value={telephone} placeholder="Téléphone..." onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Identifiant:</label>
              <Input type="text" name="identifiant" id="identifiant" value={identifiant} placeholder="Identifiant..." onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Email:</label>
              <Input type="text" name="eMail" id="email" value={eMail} placeholder="Email..." onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Type:</label>
              <Select name="type" placeholder="Type..." value={type} options={typeOptions} onChange={(e, { value }) => this.handleSelectChange(value)} />
            </Form.Field>
            <div style={{ textAlign: 'right' }}>
              <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Sauvegarder</Button>
            </div>
          </Form>
          <Form onSubmit={this.postFiles}>
            <Form.Field>
              <label>Pièces administratives (carte-grise, carte d'identité extrait de kbis etc...):</label>
              <input className="ButtonEnvoye" id="carteGrise" name="greyCard" type="file" onChange={this.handleFileChange} />
              {loadingFile && (<Progress max="100" color="success" value={loaded}>{Math.round(loaded, 2)}%</Progress>)}
            </Form.Field>
            <div style={{ textAlign: 'right' }}>
              <Button type="submit" color="teal" loading={loadingFile} disabled={loadingFile}><Icon name="paper plane outline" /> &nbsp; Envoyer fichiers </Button>
            </div>

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
  password: store.auth.passwordProfile,
  telephone: store.auth.telephoneProfile,
  uploadImg: store.auth.uploadImg
});


export default connect(mapStateToProps)(Profile);
