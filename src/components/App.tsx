import React from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'

function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: '🍜 Pan Fried Noodles',
    servings: 2,
    cookTime: '0:45',
    instructions: '1. Cook noodles\n2. Fry noodles\n3. Eat noodles',
    ingredients: [
      {
        id: 1,
        name: 'Noodles',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Oil',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: '🐟 Roasted Fish',
    servings: 3,
    cookTime: '1:15',
    instructions: '1. Put salt on fish\n2. Put fish in pan\n3. Eat fish',
    ingredients: [
      {
        id: 1,
        name: 'Fish',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '2 Tbs'
      }
    ]
  },
]

export default App;
