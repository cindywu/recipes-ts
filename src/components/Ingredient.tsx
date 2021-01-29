import React from 'react'

interface IngredientProps {
  id: string,
  name: string,
  amount: string,
}

export default function Ingredient( { name, amount }: IngredientProps ) {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  )
}
