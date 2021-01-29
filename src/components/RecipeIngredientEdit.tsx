import React from 'react'

interface RecipeIngredientEditProps {
  ingredient: any
}

export default function RecipeIngredientEdit({ ingredient }: RecipeIngredientEditProps) {
  return (
    <>
      <input 
        className="recipe-edit__input" 
        type="text"
        value={ingredient.name}
      />
      <input 
        className="recipe-edit__input" 
        type="text"
        value={ingredient.amount}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
