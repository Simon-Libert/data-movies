import styles from '../styles/SearchBar.module.css'


export default function SearchBar({ handleChange }) {
  return (
    <div className={styles.searchBarComponent}>
      <form className={styles.searchBar}>
        <input type='text'
          className={styles.input}
          placeholder="Rechercher un film"
          onChange={handleChange}
        />
        <input type="submit" className={styles.searchBtn} value="Rechercher" />
      </form>
    </div>
  )
}
