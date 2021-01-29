import React from 'react'
import Recipe from './Recipe'

type RecipeListProps = {
  recipes: Array<{
    id: string,
    name: string,
    servings: number,
    cookTime: string,
    instructions: string,
    ingredients: Array <{
      id: string,
      name: string,
      amount: string,
    }>
  }>
  handleRecipeAdd: any,
}
 
export default function RecipeList({ recipes, handleRecipeAdd }: RecipeListProps) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Recipe 
              key={recipe.id}
              {...recipe} 
            />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button 
          className="btn btn--primary"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  )
}
