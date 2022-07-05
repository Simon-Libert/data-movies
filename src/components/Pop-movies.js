import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PopMovies() {

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
  }, [])
  return (
    <div>

    </div>
  )
}
