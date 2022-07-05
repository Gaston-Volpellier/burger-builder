import React from 'react'
import './Burger.css'
import BurguerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  const { ingredients } = props
  return (
    <div className="burger">
      <BurguerIngredient type="bread-top" />
      {Object.entries(ingredients).map(([prop, value], ix) => {
        return [...Array(value)].map((_, innnerIx) => {
          return <BurguerIngredient key={innnerIx} type={prop} />
        })
      })}
      <BurguerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger
