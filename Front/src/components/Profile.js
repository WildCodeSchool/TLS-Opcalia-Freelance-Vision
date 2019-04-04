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
    this.postGreyCard = this.postGreyCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  // eslint-disable-next-line class-methods-use-this
  postGreyCard(event) {
    event.preventDefault();
    const { eMail } = this.props;
    const { carteGrise } = this.state;
    console.log(eMail);

    Axios.post('http://localhost:4000/updateProfile', { addCarteGrise: carteGrise, eMail })
      .then(res => {
        console.log(res);
      });
  }
  
  render() {
    const {
      Nom, Prénom, identifiant, type, eMail
    } = this.props;
    return (
      <div>
        <div className="profile">
          <form onSubmit={this.postGreyCard}>
            <h4><span className="logo">NOM: </span>{Nom}</h4>
            <h4><span className="logo1">Prénom: </span>{Prénom}</h4>
            <h4><span className="logo">Identifiant: </span>{identifiant}</h4>
            <h4><span className="logo1">E-mail: </span>{eMail}</h4>
            <h4><span className="logo">Type: </span>{type}</h4>
            <div>
              <span className="logo1">Sélectionner la carte</span><span className="logo"> grise à envoyer:</span>
              <input className="ButtonEnvoye" name="carteGrise" type="file" id="miniature" onChange={this.handleChange} />
            </div>
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
  token: store.auth.token,
  Nom: store.auth.nomProfile,
  Prénom: store.auth.prenomProfile,
  identifiant: store.auth.identifiantProfile,
  type: store.auth.typeProfile,
  eMail: store.auth.eMailProfile
});
export default connect(mapStateToProps)(Profile);
