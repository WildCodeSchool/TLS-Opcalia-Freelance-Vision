import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Vision.css';


class Profile extends Component {
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
          <form method="post" encType="multipart/form-data">
            <div>
              <span className="logo1">Sélectionner la carte</span><span className="logo"> grise à envoyer: </span>
              <input className="ButtonEnvoye" type="file" id="miniature" />
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
  token: store.auth.token,
  Nom: store.auth.nomProfile,
  Prénom: store.auth.prenomProfile,
  identifiant: store.auth.identifiantProfile,
  type: store.auth.typeProfile,
  eMail: store.auth.eMailProfile
});
export default connect(mapStateToProps)(Profile);
