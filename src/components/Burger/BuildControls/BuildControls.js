import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {
  const { handleIngredient, price, purchasable, ingredients } = props
  return (
    <div className="buildControls">
      <p>
        Current price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(({ type, label }) => {
        return (
          <BuildControl
            key={label}
            label={label}
            added={() => handleIngredient('add', type)}
            removed={() => handleIngredient('substract', type)}
            disabled={ingredients[type] > 0}
          />
        )
      })}
      <button className="orderButton" disabled={!purchasable}>
        Order now!
      </button>
    </div>
  )
}

export default BuildControls
