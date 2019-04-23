/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Vision.css';
import { Button, Icon } from 'semantic-ui-react';
import 'react-dropzone-uploader/dist/styles.css';
import Axios from 'axios';
// import Dropzone from 'react-dropzone-uploader';
// import Base64 from 'base64-img';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GreyCard: '',
      nom: '',
      prenom: '',
      identifiant: ''
    };
    this.postGreyCard = this.postGreyCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChangeStatus = this.handleChangeStatus.bind(this);
    // this.getUploadParams = this.getUploadParams.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  postGreyCard(event) {
    event.preventDefault();
    const { eMail } = this.props;
    const {
      GreyCard,
      identifiant,
      nom,
      prenom,
      // email
    } = this.state;
    console.log(eMail);

    Axios.post('http://localhost:4000/updateProfile', {
      eMail,
      addGreyCard: GreyCard,
      changeIdentifiant: identifiant,
      changeNom: nom,
      changePrenom: prenom,
    })
      .then(res => {
        console.log(res);
      });
  }

  encodeImageFileAsURL(event) {
    const filesSelected = event.target.value;
    const convert64 = btoa(filesSelected);
    console.log(JSON.stringify(filesSelected));
    console.log(convert64);


    // const fileReader = new FileReader();

    // // eslint-disable-next-line func-names
    // fileReader.onload = function (fileLoadedEvent) {
    //   const srcData = fileLoadedEvent.target.result; // <--- data: base64

    //   const newImage = document.createElement('img');
    //   newImage.src = srcData;

    // document.getElementById('carteGrise').innerHTML = newImage.outerHTML;
    // eslint-disable-next-line no-alert
    // alert(`Converted Base64 version is ${document.getElementById('carteGrise').innerHTML}`);
    // console.log(`Converted Base64 version is ${filesSelected}`);
    // };
    // fileReader.readAsDataURL(filesSelected);
  }


  // getUploadParams({ meta }) {
  //   const url = 'http://localhost:4000/updateProfile';
  //   return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } };
  // }

  // handleChangeStatus({ meta }, status) {
  //   console.log(status, meta);
  // }

  // handleSubmit(files, allFiles) {
  //   console.log(files.map(f => f.meta));
  //   allFiles.forEach(f => f.remove());
  // }

  render() {
    const {
      nom, prénom, identifiant, userType, eMail
    } = this.props;
    const Miniature = document.getElementById('miniature');
    console.log(Miniature);


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
            <h4><span className="logo">Type: </span>{(userType === 'Freelance') && ('Freelance')}{(userType === 'Employee') && ('Employé')}
            </h4>
            <div>
              <span className="logo1">Sélectionner la carte</span><span className="logo"> grise à envoyer:</span>
              <input className="ButtonEnvoye" id="carteGrise" name="GreyCard" type="file" onChange={this.handleChange} />
              <div id="carteGrise" />
            </div>
            {/* <Dropzone
              name="GreyCard"
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
            /> */}
            <div>
              <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Envoyer</Button>
            </div>
          </form>
          <img src={Miniature} alt="" />
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
