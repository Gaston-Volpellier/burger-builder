import React from 'react'
import './Burger.css'
import BurguerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  const { ingredients } = props

  let transformedIngredients = Object.entries(ingredients)
    .map(([prop, value], ix) => {
      return [...Array(value)].map((_, innnerIx) => {
        return <BurguerIngredient key={prop + innnerIx} type={prop} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Add your ingredients</p>
  }
  return (
    <div className="burger">
      <BurguerIngredient type="bread-top" key="breadTop" />
      {transformedIngredients}
      <BurguerIngredient type="bread-bottom" key="breadBot" />
    </div>
  )
}

export default Burger
