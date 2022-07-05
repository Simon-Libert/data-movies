import axios from 'axios'
import React, { useEffect } from 'react'
import styles from '../styles/SearchBar.module.css'

export default function SearchBar() {
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie?api_key=${process.env.API_KEY}`)
  }, [])

  return (
    <div className={styles.searchBarComponent}>
      <form className={styles.searchBar}>
        <input type='text' class={styles.input} placeholder="Rechercher un film" />
        <input type="submit" class={styles.searchBtn} value="Rechercher" />
      </form>
    </div>
  )
}
