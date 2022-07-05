import styles from '../styles/SearchBar.module.css'
import CardMovie from './CardMovie'

export default function SearchBar() {
  return (
    <div className={styles.searchBarComponent}>
      <form className={styles.searchBar}>
        <input type='text' className={styles.input} placeholder="Rechercher un film" />
        <input type="submit" className={styles.searchBtn} value="Rechercher" />
      </form>
    </div>
  )
}
