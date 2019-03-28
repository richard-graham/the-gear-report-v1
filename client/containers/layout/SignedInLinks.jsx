import React from 'react'
import {Button, Menu, MenuItem} from '@material-ui/core';
import { Link } from 'react-router-dom'

class SignedInLinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <React.Fragment>
        <Button 
          color="default"
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          >
          Tickets
        </Button>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
          >

          <a className='menu-ticket-link' href="/tickets">
            <MenuItem 
            onClick={this.handleClose}
            > View tickets </MenuItem>
          </a>

          <a className='menu-ticket-link' href="/tickets/add">
            <MenuItem 
            onClick={this.handleClose}
            > Add ticket </MenuItem>
          </a>
        </Menu>

        <a href="https://kwf.co.nz/">
          <Button color="inherit"> About </Button>
        </a>

        <div className="header-items-login">
          <Button color="inherit" 
          // onClick={this.handleLogout}
          >
            Logout
          </Button>
          {/* <img src={isLoggedIn.user.picture}/> */}
        </div>

      </React.Fragment>
    )
  }
}

export default SignedInLinks