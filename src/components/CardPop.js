import React from 'react'
import styles from '../styles/CardPop.module.css'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function CardPop({ popMovie }) {

  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${popMovie.poster_path}`} alt='poster' />
      </div>
      <div className={styles.title}>{popMovie.title}</div>
      <div className={styles.date}>{format(new Date(popMovie.release_date), 'd MMM yyyy', { locale: fr })}</div>
    </div>
  )
}
