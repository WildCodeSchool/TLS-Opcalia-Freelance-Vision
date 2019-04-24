import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import NoteDeFrais from './NoteDeFrais';
import Profile from './Profile';
import Cra from './Cra';
import './Vision.css';

class FreeLance extends Component {
    constructor(props) {
      super(props);
      this.state = { activeItem: 'Cra' }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
      const { activeItem } = this.state;
    return (
      <div>
        <div>

          <Segment color='teal' inverted>
            <Menu
              inverted pointing secondary>
              <Menu.Item name='Cra' active={activeItem === 'Cra'} onClick={this.handleItemClick} />
              <Menu.Item
                name='Profil'
                active={activeItem === 'Profil'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Note de frais'
                active={activeItem === 'Note de frais'}
                onClick={this.handleItemClick}
              />
              <p className="titleSpace">Espace Freelancek</p>
            </Menu>
          </Segment>

          {(activeItem === 'Cra') && (<Cra />)}
          {(activeItem === 'Profil') && (<Profile />)}
          {(activeItem === 'Note de frais') && (<NoteDeFrais />)}

        </div>
      </div>
    );
  }
}

export default FreeLance;
