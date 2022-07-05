import React from 'react'
import CardDesc from '../components/Card-desc'
import PopMovies from '../components/Pop-movies'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <div className='home-page'>
      <SearchBar />
      <PopMovies />
      <CardDesc />
    </div>
  )
}
