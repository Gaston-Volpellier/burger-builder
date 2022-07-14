import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
  const { ingredients, cancel } = props

  const ingredientSummary = Object.entries(ingredients).map(
    ([prop, value], ix) => {
      return (
        <li key={ix}>
          <span style={{ textTransform: 'capitalize' }}>{prop}</span>: {value}
        </li>
      )
    },
  )

  return (
    <>
      <h3>Your Order:</h3>
      <ul>{ingredientSummary}</ul>
      <p>Check Out:</p>
      <Button
        style="button danger"
        click={() => {
          cancel(false)
        }}
      >
        CANCEL
      </Button>
      <Button style="button success">CONTINUE</Button>
    </>
  )
}

export default OrderSummary
