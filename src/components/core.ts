export interface Ingredient {
  id: string
  name: string
  amount: string
}

export interface Ingredients extends Array<Ingredient>{}


export interface Recipe {
  id: string
  name: string
  servings: number
  cookTime: string
  instructions: string
  ingredients: Array<Ingredient>
}

export interface RecipePatch {
  name?: string
  servings?: number
  cookTime?: string
  instructions?: string
  ingredients?: Array<Ingredient>
}
