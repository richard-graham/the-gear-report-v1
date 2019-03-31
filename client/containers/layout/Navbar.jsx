import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <div className='header-container header'>
      <Link to='/' className='logo'>The Gear Report</Link>
      <SignedInLinks />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps)(Navbar)