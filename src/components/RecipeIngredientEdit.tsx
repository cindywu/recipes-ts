import React from 'react'

interface RecipeIngredientEditProps {
  ingredient: any
  handleIngredientChange: any
}
 
export default function RecipeIngredientEdit({ ingredient, handleIngredientChange }: RecipeIngredientEditProps) {
  
  function handleChange(changes: any) {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }

  return (
    <>
      <input 
        className="recipe-edit__input" 
        type="text"
        onInput={(e) => handleChange({ name: (e.target as HTMLTextAreaElement).value })}
        value={ingredient.name}
      />
      <input 
        className="recipe-edit__input" 
        type="text"
        onInput={(e) => handleChange({ amount: (e.target as HTMLTextAreaElement).value })}
        value={ingredient.amount}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
