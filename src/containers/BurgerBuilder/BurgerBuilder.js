import React, { useState } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

const BurgerBuilder = () => {
  const [recipe, setRecipe] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
  })

  const setRecipeHandler = (type) => {
    console.log('Type added: ' + type)

    let ingredients = [...recipe.ingredients]
    let newPrice = recipe.totalPrice + INGREDIENT_PRICES[type]

    ingredients[type] = ingredients[type] + 1
    setRecipe({ ingredients: ingredients, totalPrice: newPrice })
  }

  return (
    <>
      <Burger ingredients={recipe.ingredients} />
      <BuildControls ingredientAdded={setRecipeHandler} />
    </>
  )
}

export default BurgerBuilder
