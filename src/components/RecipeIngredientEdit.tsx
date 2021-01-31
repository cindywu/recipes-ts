import React from 'react'

interface RecipeIngredientEditProps {
  ingredient: any
  handleIngredientChange: (id: string, ingredient: any) => void
  handleIngredientDelete: (id: string) => void
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
        placeholder="Your next victim?"
      />
      <input 
        className="recipe-edit__input" 
        type="text"
        onChange={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
        placeholder="How many or much?"
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
