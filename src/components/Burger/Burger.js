import React from 'react'
import './Burger.css'
import BurguerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    const ingredientsArray = Object.keys(props.ingredients)
        .map(igKey => {
            
        })

    return (
        <div className='Burger'>
            <BurguerIngredient type="bread-top" />
            <BurguerIngredient type="cheese" />
            <BurguerIngredient type="meat" />
            <BurguerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;