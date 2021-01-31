import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { useRecipes } from './App'
import {v4 as uuidv4} from 'uuid'

interface Ingredient {
  id: string,
  name: string,
  amount: string,
}

export default function RecipeEdit() {
  const { selectedRecipe, handleRecipeSelect, handleRecipeChange } = useRecipes ()!

  function handleChange(changes: any) {
    handleRecipeChange(selectedRecipe.id, { ...selectedRecipe, ...changes})
  }

  function handleIngredientChange(id: string, ingredient: any) {
    const newIngredients = [...selectedRecipe.ingredients]
    const index = newIngredients.findIndex((i: Ingredient) => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: '',
    }
    handleChange({ ingredients: [...selectedRecipe.ingredients, newIngredient]})
  }

  function handleIngredientDelete(id: string) {
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
              onChange={e => handleChange({ name: e.target.value })}
              className="recipe-edit__input"
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
              onChange={e => handleChange({ cookTime: e.target.value })}
              className="recipe-edit__input"
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
              onChange={e => handleChange({ servings: parseInt(e.target.value) || '' })}
              className="recipe-edit__input"
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
              onChange={e => handleChange({ instructions: e.target.value })}
              value={selectedRecipe.instructions}
              className="recipe-edit__input"
            />
          </div>
          <br />
          <label className="recipe-edit__label">Ingredients</label>
          <div className="recipe-edit__ingredient-grid">
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {selectedRecipe.ingredients.map((ingredient: any) => (
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
