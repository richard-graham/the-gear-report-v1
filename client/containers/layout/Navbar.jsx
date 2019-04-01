import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <div className='header-container header'>
      <Link to='/' className='logo'>The Gear Report</Link>
      { links }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)