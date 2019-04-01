import React from 'react'
import { connect } from 'react-redux' 
import { signOut } from '../../actions/authActions'
import { Link } from 'react-router-dom'


import {Button, Menu, MenuItem} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

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
    console.log(this.props);
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

          <Link className='menu-ticket-link' to="/tickets/add">
            <MenuItem 
            onClick={this.handleClose}
            > Add ticket </MenuItem>
          </Link>
        </Menu>

        <a href="https://kwf.co.nz/">
          <Button color="inherit"> About </Button>
        </a>

        <div className="header-items-login">
          <Button color="inherit" 
          onClick={this.props.signOut}
          >
            Logout
          </Button>
          {/* <img src={isLoggedIn.user.picture}/> */}
        </div>
        <Avatar>{this.props.profile.initials}</Avatar>

      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)