import React, { useEffect, useState } from 'react'
import CardMovie from '../components/CardMovie'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import CardThumbnail from '../components/CardThumbnail'

export default function Home() {
  const [popMovies, setPopMovies] = useState()
  const [search, setSearch] = useState("a")
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&language=fr-FR`).then((res) => setMovieData(res.data.results))
  }, [search])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`).then((res) => setPopMovies(res.data.results))
  }, [])

  if (movieData === undefined) {
    return <p>Loading...</p>
  }

  if (popMovies === undefined) {
    return <p>Loading...</p>
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  /* const movieView = movieData[0] === undefined ? popMovies[0] : movieData[0] */

  return (
    <div className="container">
      <SearchBar handleChange={handleChange} />
      <div className="container-main">
        <h2 style={{ textAlign: 'center', margin: '0.5em 0' }}>Description</h2>
        <CardMovie data={popMovies[0]} />
        {(search.length > 0) ? (
          <>
            <h2 style={{ textAlign: 'center', margin: '0.5em 0' }}>Recherche</h2>
            <CardThumbnail data={movieData} />
          </>
        ) : null}
        <h2 style={{ textAlign: 'center', margin: '0.5em 0' }}>Films populaires</h2>
        <CardThumbnail data={popMovies} />
      </div>
    </div>
  )
}
