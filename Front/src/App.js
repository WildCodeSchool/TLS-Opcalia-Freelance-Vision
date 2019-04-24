/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import LogIn from './components/LogIn';
import Admin from './components/Admin';
import Freelance from './components/FreeLance';
import Employee from './components/Employee';

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_MY_VAR)
    const { profileType } = this.props;
    return (
      <div>
        {(profileType === 'Admin') && (<Admin />)}
        {(profileType === 'Employee') && (<Employee />)}
        {(profileType === 'Freelance') && (<Freelance />)}
        {(!profileType) && (<LogIn />)}
        <br />
        <form>
          <Button color="teal" icon="power off" type="submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  token: store.auth.token,
  profileType: store.auth.profileType
});
export default connect(mapStateToProps)(App);
