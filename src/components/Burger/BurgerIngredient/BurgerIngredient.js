import React from 'react'
import './BurgerIngredient.css'

const BurgerIngredient = (props) => {
  const { type } = props
  if (type == 'bread-top') {
    return (
      <div className={type}>
        <div className="seeds1"></div>
        <div className="seeds2"></div>
      </div>
    )
  }
  return <div className={type} />
}

export default BurgerIngredient
