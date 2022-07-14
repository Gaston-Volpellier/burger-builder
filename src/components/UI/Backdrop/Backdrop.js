import React from 'react'
import './Backdrop.css'

const Backdrop = (props) => {
  const { show, click } = props
  if (!show) return
  return <div className="backdrop" onClick={() => click(false)}></div>
}

export default Backdrop
