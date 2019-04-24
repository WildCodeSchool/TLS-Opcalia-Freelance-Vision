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
  }

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
