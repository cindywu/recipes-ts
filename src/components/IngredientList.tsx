import React from 'react'
import Ingredient from './Ingredient'

interface IngredientListProps {
  ingredients: Array<{
    id: number,
    name: string,
    amount: string,
  }>
}

export default function IngredientList( { ingredients } : IngredientListProps) {
  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />
  })
  return (
    <div className="ingredient-grid">
      {ingredientElements}
    </div>
  )
}
