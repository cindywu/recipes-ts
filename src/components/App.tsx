import React, { useState, createContext, useEffect, useContext } from 'react'
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'

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

interface Recipes extends Array<Recipe>{}

type RecipesContextType = {
  recipes: Recipes
  selectedRecipe: Recipe
  handleRecipeAdd: () => void
  handleRecipeSelect: (id: string) => void
  handleRecipeChange: (id: string, recipe: Recipe) => void
  handleRecipeDelete: (id: string) => void
}

const RecipesContext = createContext<RecipesContextType | undefined>(
  undefined
)

const LOCAL_STORAGE_KEY = 'recipesTypescript.recipes'

type Props = {
  children: React.ReactNode
}

export const RecipeProvider = ({ children }: Props) => {
  const [recipes, setRecipes] = useState<any>(sampleRecipes)
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>()
  const selectedRecipe = recipes.find((recipe: Recipe) => recipe.id === selectedRecipeId)

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

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

  function handleRecipeSelect(id: string) {
    setSelectedRecipeId(id)
  }

  function handleRecipeChange(id: string, recipe: Recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex((r: Recipe) => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id: string) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter((recipe: Recipe) => recipe.id !== id))
  }

  return (
    <RecipesContext.Provider value={{ 
      recipes, 
      selectedRecipe, 
      handleRecipeAdd, 
      handleRecipeSelect, 
      handleRecipeChange, 
      handleRecipeDelete 
    }}>
      {children}
    </RecipesContext.Provider>
  )
}

export const useRecipes = () => useContext(RecipesContext)

function App() {
  return (
    <RecipeProvider>
      <RecipeList />
      <RecipeEdit />
    </RecipeProvider>
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
