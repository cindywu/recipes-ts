import React from 'react'
import Recipe from './Recipe'

type RecipeListProps = {
  recipes: Array<{
    id: number,
    name: string,
    servings: number,
    cookTime: string,
    instructions: string,
    ingredients: Array <{
      id: number,
      name: string,
      amount: string,
    }>
  }>
}
 
export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <>
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
      <button>Add Recipe</button>
    </>
  )
}
