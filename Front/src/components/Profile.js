/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Vision.css';
import 'react-dropzone-uploader/dist/styles.css';
import Axios from 'axios';
import Dropzone from 'react-dropzone-uploader';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carteGrise: '',
      nom: '',
      prenom: '',
      identifiant: ''
    };
    this.postGreyCard = this.postGreyCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.getUploadParams = this.getUploadParams.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }


  postGreyCard(event) {
    event.preventDefault();
    const { eMail } = this.props;
    const {
      carteGrise,
      identifiant,
      nom,
      prenom,
      // email
    } = this.state;
    console.log(eMail);

    Axios.post('http://localhost:4000/updateProfile', {
      eMail,
      addCarteGrise: carteGrise,
      changeIdentifiant: identifiant,
      changeNom: nom,
      changePrenom: prenom,
    })
      .then(res => {
        console.log(res);
      });
  }


  getUploadParams({ meta }) {
    const { eMail } = this.props;
    const { carteGrise } = this.state;
    Axios.post('http://localhost:4000/updateProfile', {
      eMail,
      addCarteGrise: carteGrise,
    });
    const url = 'http://localhost:4000/updateProfile';
    return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } };
  }

  // eslint-disable-next-line class-methods-use-this
  handleChangeStatus({ meta }, status) {
    console.log(status, meta);
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(files, allFiles) {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  }

  render() {
    const {
      nom, prénom, identifiant, type, eMail
    } = this.props;
    return (
      <div>
        <div className="profile">
          <form onSubmit={this.postGreyCard}>
            <h4><span className="logo">NOM: </span>{nom}</h4>
            <input type="text" name="nom" placeholder="Changer le nom: " onChange={this.handleChange} />
            <h4><span className="logo1">Prénom: </span>{prénom}</h4>
            <input type="text" name="prenom" placeholder="Changer le prénom: " onChange={this.handleChange} />
            <h4><span className="logo">Identifiant: </span>{identifiant}</h4>
            <input type="text" name="identifiant" placeholder="Changer l'identifiant: " onChange={this.handleChange} />
            <h4><span className="logo1">E-mail: </span>{eMail}</h4>
            <h4><span className="logo">Type: </span>{(type === 'F') && ('Freelance')}{(type === 'E') && ('Employé')}
            </h4>
            <div>
              <span className="logo1">Sélectionner la carte</span><span className="logo"> grise à envoyer:</span>
              {/* <input className="ButtonEnvoye" name="carteGrise" type="file" onChange={this.handleChange} /> */}
            </div>
            <Dropzone
              name="carteGrise"
              getUploadParams={this.getUploadParams}
              onChangeStatus={this.handleChangeStatus}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              accept="image/*,audio/*,video/*"
              inputContent={(extra) => (extra.reject ? 'Image, audio and video files only' : 'Drag Files')}
            // styles={{
            //   dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
            //   inputLabel: (extra) => (extra.reject ? { color: 'red' } : {}),
            // }}
            />
            <div>
              <button className="ButtonEnvoye" type="submit">Envoyer</button>
            </div>
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
  type: store.auth.typeProfile,
  eMail: store.auth.eMailProfile,
  password: store.auth.passwordProfile
});
export default connect(mapStateToProps)(Profile);
