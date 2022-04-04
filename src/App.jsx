import React from 'react'
import { Footer } from './containers/Footer'
import { Header } from './containers/Header'
import { Pokedex } from './containers/Pokedex'
import './styles/Global.css'
export const App = () => {
  return (
    <div className='Container'>
        <Header/>
        <Pokedex/>
        <Footer/>
    </div>
  )
}
