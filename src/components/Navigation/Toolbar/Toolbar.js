import React from 'react'
import Logo from '../../Logo/Logo'
import NavitagionItems from '../NavigationItems/NavigationItems'
import './Toolbar.css'

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <div>MENU</div>
      <Logo />
      <nav>
        <NavitagionItems />
      </nav>
    </header>
  )
}

export default Toolbar
