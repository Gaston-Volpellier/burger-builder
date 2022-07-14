import React, { useState } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
  const [purchasable, setPurchasable] = useState(false)

  const [modal, setModal] = useState(false)

  const handleModal = (method) => setModal(method)

  const handleIngredient = (method, type) => {
    const { totalPrice, ingredients } = recipe
    let newPrice

    switch (method) {
      case 'add':
        ingredients[type] = ingredients[type] + 1
        newPrice = totalPrice + INGREDIENT_PRICES[type]
        break
      case 'substract':
        ingredients[type] = ingredients[type] - 1
        newPrice = totalPrice - INGREDIENT_PRICES[type]
        break
    }

    setRecipe({ ingredients: ingredients, totalPrice: newPrice })

    if (Object.values(ingredients).some((ingrendient) => ingrendient > 0)) {
      setPurchasable(true)
    } else {
      setPurchasable(false)
    }
  }

  return (
    <>
      <Modal show={modal}>
        <OrderSummary ingredients={recipe.ingredients} />
      </Modal>

      <Burger ingredients={recipe.ingredients} />
      <BuildControls
        handleIngredient={handleIngredient}
        ingredients={recipe.ingredients}
        price={recipe.totalPrice}
        purchasable={purchasable}
        showModal={handleModal}
      />
    </>
  )
}

export default BurgerBuilder
