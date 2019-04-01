import React from 'react'
import { Link } from 'react-router-dom'

import {Button, Menu, MenuItem} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

class SignedOutLinks extends React.Component {
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

          <Link className='menu-ticket-link' to="/tickets">
            <MenuItem 
            onClick={this.handleClose}
            > View tickets </MenuItem>
          </Link>

        </Menu>

        <a href="https://kwf.co.nz/">
          <Button color="inherit"> About </Button>
        </a>

        <Link to='/signin' className="header-items-login">
          <Button color="inherit" 
          // onClick={this.handleLogout}
          >
            Login
          </Button>
          {/* <img src={isLoggedIn.user.picture}/> */}
        </Link>
        
        <Link to='/register' className="header-items-login">
          <Button color="inherit" 
          // onClick={this.handleLogout}
          >
            Register
          </Button>
          {/* <img src={isLoggedIn.user.picture}/> */}
        </Link>

      </React.Fragment>
    )
  }
}

export default SignedOutLinks