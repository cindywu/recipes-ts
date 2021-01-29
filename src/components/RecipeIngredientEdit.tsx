import React from 'react'

interface RecipeIngredientEditProps {
  ingredient: any
  handleIngredientChange: any
  handleIngredientDelete: any
}
 
export default function RecipeIngredientEdit({ ingredient, handleIngredientChange, handleIngredientDelete }: RecipeIngredientEditProps) {

  function handleChange(changes: any) {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }

  return (
    <>
      <input 
        className="recipe-edit__input" 
        type="text"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input 
        className="recipe-edit__input" 
        type="text"
        onChange={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button 
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  )
}
