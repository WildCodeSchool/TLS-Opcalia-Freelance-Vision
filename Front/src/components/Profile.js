/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Vision.css';
import { Button, Icon } from 'semantic-ui-react';
import 'react-dropzone-uploader/dist/styles.css';
import Axios from 'axios';
import { Progress } from 'reactstrap';
import { IP } from '../config.json';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greyCard: '',
      nom: '',
      prenom: '',
      identifiant: '',
      loaded: 0
    };
    this.postProfile = this.postProfile.bind(this);
    this.postFiles = this.postFiles.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
    } = this.state;
    Axios.post(`http://${IP}:4000/updateProfile`, {
      eMail,
      changeIdentifiant: identifiant,
      changeNom: nom,
      changePrenom: prenom,
    })
      .then(res => {
        console.log(res);
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
      nom, prénom, identifiant, userType, eMail
    } = this.props;
    const { loaded } = this.state;
    return (
      <div>
        <div className="profile">
          <form onSubmit={this.postProfile}>
            <h4><span className="logo">NOM: </span>{nom}</h4>
            <input type="text" name="nom" placeholder="Changer le nom: " onChange={this.handleChange} />
            <h4><span className="logo1">Prénom: </span>{prénom}</h4>
            <input type="text" name="prenom" placeholder="Changer le prénom: " onChange={this.handleChange} />
            <h4><span className="logo">Identifiant: </span>{identifiant}</h4>
            <input type="text" name="identifiant" placeholder="Changer l'identifiant: " onChange={this.handleChange} />
            <h4><span className="logo1">E-mail: </span>{eMail}</h4>
            <h4><span className="logo">Type: </span>{(userType === 'Freelance') && ('Freelance')}{(userType === 'Employee') && ('Employé')}
            </h4>
            <div>
              <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Envoyer</Button>
            </div>
          </form>
          <form onSubmit={this.postFiles}>
            <h4>Sélectionner la carte grise à envoyer:</h4>
            <div id="carteGrise" />
            <input className="ButtonEnvoye" id="carteGrise" name="greyCard" type="file" onChange={this.handleFileChange} /><br />
            <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Envoyer fichiers </Button>
            <Progress max="100" color="success" value={loaded}>{Math.round(loaded, 2)}%</Progress>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  tokenUser: store.auth.tokenUser,
  nom: store.auth.nomProfile,
  prénom: store.auth.prenomProfile,
  identifiant: store.auth.identifiantProfile,
  userType: store.auth.typeProfile,
  eMail: store.auth.eMailProfile,
  password: store.auth.passwordProfile
});


export default connect(mapStateToProps)(Profile);
