import React from 'react'
import Recipe from './Recipe'
import { useRecipes } from './App'

interface Ingredient {
  id: string
  name: string
  amount: string
}

interface Recipe {
  id: string
  name: string
  servings: number
  cookTime: string
  instructions: string
  ingredients: Array<Ingredient>
}

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
        {recipes.map((recipe: Recipe) => {
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
