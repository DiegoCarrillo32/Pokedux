import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavoritePokemon } from '../actions'
import '../styles/components/PokemonCard.css'
export const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch() 

  const handleClick = () => {
    dispatch(addFavoritePokemon(pokemon))
  }

  return (
    <div className='PokemonCard'>
      <div className='PokemonCard-header'>
        <i className="fa-solid fa-star" onClick={handleClick} ></i>
      </div>
      <div className="PokemonCard-img">
        <img src={pokemon?.sprites?.front_default} alt="Jiggly" />
      </div>
      
      <div className="PokemonCard-body">
        <h3> {pokemon?.name} </h3>
        {
          pokemon?.types?.map( type => (
            <span key={`${pokemon.id}-${type.type.name}`} > {type.type.name} </span>
          ) )
        }
      </div>
    </div>
  )
}
