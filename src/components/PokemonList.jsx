import React from 'react'
import { PokemonCard } from './PokemonCard'
import '../styles/components/PokemonList.css'

export const PokemonList = ({pokemons}) => {
  
  return (
    <>
   
      {
        pokemons.map( (pokemon, index) => (
          
          <PokemonCard pokemon={pokemon} key={index} />
          
        ) )
 
      }

    </>
  )
}
