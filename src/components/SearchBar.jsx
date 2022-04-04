import React, { useRef, useEffect } from 'react'
import '../styles/components/SearchBar.css'
export const SearchBar = () => {
  const input = useRef()
  

  const handleChange = () => {
    console.log(input.current.value);
  }

  return (
    <input ref={input} className='SearchInput' type="text" placeholder='Search pokemon' onChange={handleChange}/>
  )
}
