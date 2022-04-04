import React from 'react'
import { PokemonCard } from './PokemonCard'
import '../styles/components/SideFavoritePoke.css'
import { useSelector } from 'react-redux'
export const SideFavoritePoke = () => {
  const list = useSelector((state) => state.favorites)
  return (
    <div className='SideFavoritePoke'>
        {
          list.length ? list.map( (pokemon) => (
            <PokemonCard pokemon={pokemon}/>
          ) )  : <h1 style={{color:'white'}}>No hay pokemones favoritos</h1>
        }
        
        
    </div>
  )
}
