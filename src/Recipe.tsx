import React from 'react'

interface RecipeProps {
    id: number,
    name: string,
    servings: number,
    cookTime: string,
    instructions: string,
}

export default function Recipe({name, servings, cookTime, instructions}: RecipeProps) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>
          {instructions}
        </div>
      </div>
    </div>
  )
}
