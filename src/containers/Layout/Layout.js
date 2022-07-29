import React from 'react'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import './Layout.css'

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className="Content">{props.children}</main>
    </>
  )
}

export default Layout
