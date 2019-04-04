import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from './components/LogIn';
import Admin from './components/Admin';
import Freelance from './components/FreeLance';
import Employee from './components/Employee';

class App extends Component {
  render() {
    const { profileType } = this.props;
    return (
      <div>
        {(profileType === 'Admin') && (<Admin />)}
        {(profileType === 'Employee') && (<Employee />)}
        {(profileType === 'Freelance') && (<Freelance />)}
        {(!profileType) && (<LogIn />)}
        <br />
        <form>
          <button type="submit" className="ButtonEnvoye">Déconnection</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  tokenUser: store.auth.tokenUser,
  tokenAdmin: store.auth.tokenAdmin,
  profileType: store.auth.profileType
});
export default connect(mapStateToProps)(App);
