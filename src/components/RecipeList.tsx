import React from 'react'
import Recipe from './Recipe'
import { useRecipes } from './App'

const AddRecipeButton = () => {
  const { handleRecipeAdd } = useRecipes ()!

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
  const { recipes } = useRecipes ()!
  
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe: any) => {
          return (
            <Recipe 
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
