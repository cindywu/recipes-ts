import React from 'react'
import Recipe from './Recipe'
import { useRecipes } from './App'
import {v4 as uuidv4} from 'uuid'


const AddRecipeButton = () => {
  const { recipes, setRecipes, setSelectedRecipeId } = useRecipes ()!

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: '', amount: ''}
      ]
    }
  
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

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
  console.log('recipes', recipes)
  
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
