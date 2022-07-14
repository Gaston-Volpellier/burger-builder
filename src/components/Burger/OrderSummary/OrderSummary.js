import React from 'react'

const OrderSummary = (props) => {
  const { ingredients } = props

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
    </>
  )
}

export default OrderSummary
