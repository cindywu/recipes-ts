import React from 'react'

interface IngredientProps {
  id: number,
  name: string,
  amount: string,
}

export default function Ingredient( { id, name, amount }: IngredientProps ) {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  )
}
