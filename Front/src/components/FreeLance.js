import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Profile from './Profile';
import Cra from './Cra';
import './Vision.scss';

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
      
              <p className="titleSpace">Espace Freelance</p>
            </Menu>
          </Segment>

          {(activeItem === 'Cra') && (<Cra />)}
          {(activeItem === 'Profil') && (<Profile />)}

        </div>
      </div>
    );
  }
}

export default FreeLance;
