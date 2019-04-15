/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import GestUser from './GestUser';
import GestMessage from './GestMessage';


class Admin extends Component {
  constructor() {
    super();
    this.state = ({
      activeItem: 'User',
    });
  }

  handleItemClick(e, { name }) { this.setState({ activeItem: name }); }

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu color="teal" tabular>
          <Menu.Item name="User" active={activeItem === 'User'} onClick={this.handleItemClick} />
          <Menu.Item name="Message" active={activeItem === 'Message'} onClick={this.handleItemClick} />
        </Menu>
        <br />
        <br />

        <div className="content">
          {(activeItem === 'User') && (<GestUser />)}
          {(activeItem === 'Message') && (<GestMessage />)}
        </div>

      </div>
    );
  }
}

export default Admin;
