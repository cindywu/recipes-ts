import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { useRecipes } from './App'
import {v4 as uuidv4} from 'uuid'
import type {Ingredient, Ingredients, RecipePatch} from './core'

export default function RecipeEdit() {
  const { selectedRecipe, handleRecipeSelect, handleRecipeChange } = useRecipes()

  if (selectedRecipe === undefined) {
    return null;
  }

  const handleChange = (changes: RecipePatch) => {
    handleRecipeChange(selectedRecipe.id, { ...selectedRecipe, ...changes})
  }

  const handleIngredientChange = (id: string, ingredient: Ingredient) => {
    const newIngredients: Ingredients = [...selectedRecipe.ingredients]
    const index = newIngredients.findIndex((i: Ingredient) => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
  }

  const handleIngredientAdd =() =>  {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: '',
    }
    handleChange({ ingredients: [...selectedRecipe.ingredients, newIngredient]})
  }

  const handleIngredientDelete = (id: string) => {
    handleChange({
      ingredients: selectedRecipe.ingredients.filter((i: Ingredient) => i.id !== id)
    })
  }

  return (
    <>
      {selectedRecipe &&
        <div className="recipe-edit">
          <div className="recipe-edit__remove-button-container">
            <button 
              className="btn recipe-edit__remove-button"
              onClick={() => handleRecipeSelect('')}
              >
                &times;
              </button>
          </div>
          <div className="recipe-edit__details-grid">
            <label 
              htmlFor="name"
              className="recipe-edit__label">
              Name
            </label>
            <input 
              type="text"
              name="name" 
              id="name"
              value={selectedRecipe.name}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>,
               ): void => handleChange({ name: e.target.value })}
              className="recipe-edit__input"
              placeholder="What's cooking?"
            />
            <label
              htmlFor="cookTime"
              className="recipe-edit__label"
            >
              Cook Time
            </label>
            <input 
              type="text" 
              name="cookTime" 
              id="cookTime"
              value={selectedRecipe.cookTime}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>,
               ): void => handleChange({ cookTime: e.target.value })}
              className="recipe-edit__input"
              placeholder="How long will it take?"
            />
            <label 
              htmlFor="servings"
              className="recipe-edit__label"
            >
              Servings
            </label>
            <input 
              type="number" 
              min="1" 
              name="servings" 
              id="servings" 
              value={selectedRecipe.servings}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>,
               ): void => {
                 if (!e.target.value) {
                  return
                 }
                 handleChange({ servings: parseInt(e.target.value)})
              }}
              className="recipe-edit__input"
              placeholder="Feeding how many?"
            />
            <label 
              htmlFor="instructions"
              className="recipe-edit__label"
            >
              Instructions
            </label>
            <textarea 
              name="instructions" 
              id="instructions"
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement>,
              ): void => handleChange({ instructions: e.target.value })}
              value={selectedRecipe.instructions}
              className="recipe-edit__input"
              placeholder="How make?"
            />
          </div>
          <br />
          <label className="recipe-edit__label">Ingredients</label>
          <div className="recipe-edit__ingredient-grid">
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {selectedRecipe.ingredients.map((ingredient: Ingredient) => (
              <RecipeIngredientEdit 
                key={ingredient.id}
                ingredient={ingredient}
                handleIngredientChange={handleIngredientChange}
                handleIngredientDelete={handleIngredientDelete}
                />
            ))}
          </div>
          <div className="recipe-edit__add-ingredient-btn-container">
            <button 
              className="btn btn--primary"
              onClick={() => handleIngredientAdd()}
            >
              Add Ingredient
            </button>
          </div>
        </div>
      }
    </>
   
  )
}
