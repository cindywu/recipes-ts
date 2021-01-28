import React from 'react'
import Recipe from './Recipe'

type RecipeListProps = {
  recipes: Array<{
    id: number,
    name: string,
    servings: number,
    cookTime: string,
    instructions: string,
  }>
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <>
      <Recipe />
      <Recipe />
    </>
  )
}
