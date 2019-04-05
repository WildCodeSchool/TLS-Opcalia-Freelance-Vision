import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Vision.css';
import Axios from 'axios';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carteGrise: ''
    };
    this.postGreycard = this.postGreycard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  postGreycard(event) {
    event.preventDefault();
    const { eMail } = this.props;
    const { carteGrise } = this.state;
    Axios.post('http://localhost:4000/updateProfile', {
      eMail,
      addCarteGrise: carteGrise
    })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    const {
      Nom, Prénom, identifiant, type, eMail
    } = this.props;
    const Miniature = document.getElementById('miniature');
    console.log(Miniature);


    return (
      <div>
        <div className="profile">
          <h4><span className="logo">NOM: </span>{Nom}</h4>
          <h4><span className="logo1">Prénom: </span>{Prénom}</h4>
          <h4><span className="logo">Identifiant: </span>{identifiant}</h4>
          <h4><span className="logo1">E-mail: </span>{eMail}</h4>
          <h4><span className="logo">Type: </span>{type}</h4>
          <form onSubmit={this.postGreycard}>
            <div>
              <span className="logo1">Sélectionner la carte</span><span className="logo"> grise à envoyer: </span>
              <input className="ButtonEnvoye" name="carteGrise" type="file" id="miniature" onChange={this.handleChange} />
            </div>
            <div>
              <button className="ButtonEnvoye" type="submit">Envoyer</button>
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
  Nom: store.auth.nomProfile,
  Prénom: store.auth.prenomProfile,
  identifiant: store.auth.identifiantProfile,
  type: store.auth.typeProfile,
  eMail: store.auth.eMailProfile,
  password: store.auth.passwordProfile
});


export default connect(mapStateToProps)(Profile);
