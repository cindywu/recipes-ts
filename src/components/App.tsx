import React, { useState } from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd(){
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
    <RecipeList 
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
    />
  )
}



const sampleRecipes = [
  {
    id: 'f7f01dc4-1ad2-4640-b383-33bf4f6c7c57',
    name: '🍜 Pan Fried Noodles',
    servings: 2,
    cookTime: '0:45',
    instructions: '1. Cook noodles\n2. Fry noodles\n3. Eat noodles',
    ingredients: [
      {
        id: '9b715dc2-b321-43cb-86c2-e858869a4080',
        name: 'Noodles',
        amount: '2 Pounds'
      },
      {
        id: '4dbde2f5-8255-40ca-9e38-1d66784b3110',
        name: 'Oil',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: '902ef8f1-aa40-443f-82f1-1d200662cd16',
    name: '🐟 Roasted Fish',
    servings: 3,
    cookTime: '1:15',
    instructions: '1. Put salt on fish\n2. Put fish in pan\n3. Eat fish',
    ingredients: [
      {
        id: 'd8a65f80-f1b7-4d85-8ba7-aa5386d4f880',
        name: 'Fish',
        amount: '3 Pounds'
      },
      {
        id: '0d94cc88-42cb-48a8-8d90-65fc1b7b09fd',
        name: 'Salt',
        amount: '2 Tbs'
      }
    ]
  },
]

export default App;
