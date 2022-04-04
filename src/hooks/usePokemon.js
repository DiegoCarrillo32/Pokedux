import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemon } from '../actions';

export const usePokemon = (limit) => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.list)
  const API = 'https://pokeapi.co/api/v2/' + `pokemon?limit=${limit}`;
  const getPokemon = useCallback( () => {
    const fetchData = async () => {
      console.log('GOT POKEMONS');
      const data = await fetch(API)
      const json = await data.json();
      const res = await Promise.all(json.results.map(async (pokemon) => {
        const data = await fetch(pokemon.url)
        return await data.json()
        
      }))
      
      dispatch(setPokemon(res))
    }
    fetchData()
  }, [] )

  React.useEffect(() => {
    
    getPokemon()

  }, [])
  return list;
}