import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'

const Navbar = () => {
  return (
    <div className='header-container header'>
      <Link to='/' className='logo'>The Gear Report</Link>
      <SignedInLinks />
    </div>
  )
}

export default Navbar