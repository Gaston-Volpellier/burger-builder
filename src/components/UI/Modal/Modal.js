import React from 'react'
import './Modal.css'

const Modal = (props) => {
  const { show } = props
  if (!show) return
  return <div className="modal">{props.children}</div>
}

export default Modal
