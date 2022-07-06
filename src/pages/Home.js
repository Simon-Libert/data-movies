import React, { useEffect, useState } from 'react'
import CardMovie from '../components/CardMovie'
/* import Movies from '../components/Movies' */
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import CardThumbnail from '../components/CardThumbnail'

export default function Home() {
  const [popMovies, setPopMovies] = useState()
  /* const [search, setSearch] = useState([]) */

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`).then((res) => setPopMovies(res.data.results))
  }, [])

  /* useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=a${search}`).then((res) => setSearch(res.data.results))
  }, []) */
  if (popMovies === undefined) {
    return <p>Loading...</p>
  }

  return (
    <div className="container">
      <SearchBar />
      <div className="container-main">
        <h2>Description</h2>
        <CardMovie />
        <h2>Recherche</h2>
        {/* <Movies data={search} /> */}
        <h2>Films populaires</h2>
        <CardThumbnail data={popMovies} />
      </div>
    </div>
  )
}
