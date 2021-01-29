import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { useRecipes } from './App'

export default function RecipeEdit() {
  const { selectedRecipe, recipes, setRecipes} = useRecipes ()!

  function handleRecipeChange(id: string, recipe: any) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex((r: any) => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleChange(changes: any) {
    handleRecipeChange(selectedRecipe.id, { ...selectedRecipe, ...changes})
  }

  function handleIngredientChange(id: string, ingredient: any) {
    const newIngredients = [...selectedRecipe.ingredients]
    const index = newIngredients.findIndex((i: any) => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
  }

  return (
    <>
      {selectedRecipe &&
        <div className="recipe-edit">
          <div className="recipe-edit__remove-button-container">
            <button className="btn recipe-edit__remove-button">&times;</button>
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
              onInput={e => handleChange({ name: (e.target as HTMLTextAreaElement).value })}
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
              onInput={e => handleChange({ cookTime: (e.target as HTMLTextAreaElement).value })}
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
              onInput={e => handleChange({ servings: parseInt((e.target as HTMLTextAreaElement).value) || '' })}
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
              onInput={e => handleChange({ instructions: (e.target as HTMLTextAreaElement).value })}
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
                handleIngredientChange={handleIngredientChange}/>
            ))}
          </div>
          <div className="recipe-edit__add-ingredient-btn-container">
            <button className="btn btn--primary">Add Ingredient</button>
          </div>
        </div>
      }
    </>
   
  )
}
