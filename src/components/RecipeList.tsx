import React from 'react'
import RecipeComponent from './Recipe'
import { useRecipes } from './App'
import type { Recipe } from './core'

const AddRecipeButton = () => {
  const { handleRecipeAdd } = useRecipes()

  return (
    <div className="recipe-list__add-recipe-btn-container">
      <button 
        className="btn btn--primary"
        onClick={handleRecipeAdd}
      >
        Add Recipe
      </button>
    </div>
  )
}
 
export default function RecipeList() {
  const { recipes } = useRecipes()
  
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe: Recipe) => {
          return (
            <RecipeComponent 
              key={recipe.id}
              {...recipe} 
            />
          )
        })}
      </div>
      <div>
        <AddRecipeButton />
      </div>
    </div>
  )
}
