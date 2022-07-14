import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'

const Modal = (props) => {
  const { show, hideModal } = props
  if (!show) return
  return (
    <>
      <Backdrop show={show} click={hideModal} />
      <div className="modal">{props.children}</div>
    </>
  )
}

export default Modal
