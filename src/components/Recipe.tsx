import React from 'react'
import IngredientList from './IngredientList'
import { useRecipes } from './App'

interface RecipeProps {
  id: string,
  name: string,
  servings: number,
  cookTime: string,
  instructions: string,
  ingredients: Array<{
    id: string,
    name: string,
    amount: string,
  }>
  handleRecipeDelete: (id: string) => void
  handleRecipeSelect: (id: string) => void
}

export default function Recipe({id, name, servings, cookTime, instructions, ingredients }: RecipeProps) {
  const { handleRecipeDelete, handleRecipeSelect } = useRecipes ()!

  const EditRecipeButton = () => {
    return (
      <button 
        className='btn btn--primary mr-1'
        onClick={() => handleRecipeSelect(id)}
      >
        Edit
      </button>
    )
  }

  const DeleteRecipeButton = () => {
    return (
      <button 
        className='btn btn--danger'
        onClick={() => handleRecipeDelete(id)}
      >
        Delete
      </button> 
    )
  }
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <EditRecipeButton />
          <DeleteRecipeButton />
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}
