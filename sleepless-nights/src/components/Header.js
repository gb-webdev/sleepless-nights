import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import './Header.css'
import logo from '../assets/sleep-logo.png'

const Header = () => {
  return (
    <Nav className='header-div-wrap'>

      <NavItem>
        <NavLink to='/'>
          <img className='logo' src={logo}/>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to='/mytracks'>
          <h2>Tracks</h2>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to='/about'>
          <h2>About me</h2>
        </NavLink>
      </NavItem>

    </Nav>
  )
}

export default Header