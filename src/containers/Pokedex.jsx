import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { setPokemon } from '../actions'
import { PokemonList } from '../components/PokemonList'
import { SearchBar } from '../components/SearchBar'
import { SideFavoritePoke } from '../components/SideFavoritePoke'
import { usePokemon } from '../hooks/usePokemon'
import '../styles/containers/Pokedex.css'


// const mapStateToProps = (state) => ({
//   list:state.list
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemon(value))
// })

export const Pokedex = () => {
  const list = usePokemon(151)


  return (
    <div className='Pokedex'>
      <div className="DexSearch">
        <div className='SearchBar'>
          <SearchBar/>
        </div>
        <div className='PokemonList'>
          <PokemonList pokemons={list} />
        </div>
      </div>
      <div className='PokemonFavorite'>
        <SideFavoritePoke/>
      </div>
    </div>
  )
}

// export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)