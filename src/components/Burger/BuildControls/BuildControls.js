import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
  <div className="buildControls">
    <p>
      Current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className="orderButton" disabled={!props.purchasable}>
      Order now!
    </button>
  </div>
)

export default BuildControls
