import React from 'react'

interface Ingredient {
  id: string
  name: string
  amount: string
}

interface RecipeIngredientEditProps {
  ingredient: Ingredient
  handleIngredientChange: (id: string, ingredient: Ingredient) => void
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
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>,
        ): void => handleChange({ name: e.target.value })}
        value={ingredient.name}
        placeholder="Your next victim?"
      />
      <input 
        className="recipe-edit__input" 
        type="text"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>,
        ): void => handleChange({ amount: e.target.value })}
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
