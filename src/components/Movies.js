import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardPop from './CardPop'
import styles from '../styles/Movies.module.css'

export default function PopMovies() {
  const [popMovies, setPopMovies] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`).then((res) => setPopMovies(res.data.results))
  }, [])
  return (
    <div >
      <div className={styles.cardsPop}>
        {popMovies.slice(0, 5).map((popMovie) => (
          <CardPop key={popMovie.id}
            popMovie={popMovie}
          />
        ))}
      </div>
    </div>
  )
}
