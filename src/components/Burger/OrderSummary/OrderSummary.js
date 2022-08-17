import React from 'react'
import Button from '../../UI/Button/Button'
import saveData from '../../../firebase'

const OrderSummary = (props) => {
  const { ingredients, cancel, price } = props

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
      <p>
        <strong>Total price: ${price.toFixed(2)}</strong>
      </p>
      <Button
        style="button danger"
        click={() => {
          cancel(false)
        }}
      >
        CANCEL
      </Button>
      <Button
        style="button success"
        click={() => {
          saveData(ingredients, '2')
        }}
      >
        CONTINUE
      </Button>
    </>
  )
}

export default OrderSummary
