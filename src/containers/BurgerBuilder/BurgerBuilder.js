import React, { useState } from 'react'
import Burger from '../../components/Burger/Burger'

const BurgerBuilder = () => {
    
    const [recipe, setRecipe] = useState({
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    })

    return (
        <>
            <Burger />
            <div>
                Build Controls
            </div>
        </>
    )
}

export default BurgerBuilder