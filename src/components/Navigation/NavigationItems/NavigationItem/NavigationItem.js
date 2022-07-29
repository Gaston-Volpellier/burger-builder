import React from 'react'
import './NavigationItem.css'

const NavitagionItem = (props) => {
  const { children, link, active } = props
  return (
    <li className="navigationItem">
      <a href={link} className={active ? 'active' : null}>
        {children}
      </a>
    </li>
  )
}

export default NavitagionItem
