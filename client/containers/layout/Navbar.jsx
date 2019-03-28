import React from 'react'
import {Button, Menu, MenuItem} from '@material-ui/core';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header-container header'>
      <Link to='/' className='logo'>The Gear Report</Link>
    </div>
  )
}

export default Navbar