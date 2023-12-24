import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import './Header.css'
import logo from '../assets/sleep-logo.png'

const Header = () => {
  return (
    <Nav className='header-div-wrap'>

      <NavItem className='logo-div'>
        <NavLink to='/'>
          <img className='logo' src={logo}/>
        </NavLink>
      </NavItem>

      <NavItem className='header-item'>
        <NavLink to='/mytracks' className='header-link'>
          <h2>Tracks | ミュージック</h2>
        </NavLink>
      </NavItem>

      <NavItem className='header-item'>
        <NavLink to='/about' className='header-link'>
          <h2>About me | アバウト・ミー</h2>
        </NavLink>
      </NavItem>

    </Nav>
  )
}

export default Header