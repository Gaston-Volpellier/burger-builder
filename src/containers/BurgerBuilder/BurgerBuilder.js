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
    purchasable: false,
  })

  const updatePurchase = () => {}

  const addRecipeHandler = (type) => {
    const { totalPrice, ingredients } = recipe

    const newPrice = totalPrice + INGREDIENT_PRICES[type]

    ingredients[type] = ingredients[type] + 1
    setRecipe({ ingredients: ingredients, totalPrice: newPrice })
  }

  const removeRecipeHandler = (type) => {
    if (recipe.ingredients[type] <= 0) {
      return
    }

    const ingredients = recipe.ingredients
    const newPrice = recipe.totalPrice - INGREDIENT_PRICES[type]

    ingredients[type] = ingredients[type] - 1
    setRecipe({ ingredients: ingredients, totalPrice: newPrice })
  }

  const disabledInfo = { ...recipe.ingredients }
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  return (
    <>
      <Burger ingredients={recipe.ingredients} />
      <BuildControls
        ingredientAdded={addRecipeHandler}
        ingredientRemove={removeRecipeHandler}
        disabled={disabledInfo}
        price={recipe.totalPrice}
      />
    </>
  )
}

export default BurgerBuilder
