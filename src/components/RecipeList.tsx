import React from 'react'
import Recipe from './Recipe'
import { useRecipes } from './App'
import {v4 as uuidv4} from 'uuid'


const AddRecipeButton = () => {
  const { recipes, setRecipes } = useRecipes ()!

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }
  
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
