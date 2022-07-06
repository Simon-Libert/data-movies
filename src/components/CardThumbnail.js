import React from 'react'
import styles from '../styles/CardThumbnail.module.css'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function CardThumbnail({ data }) {

  return (
    <div className={styles.cardsPop}>
      {data.slice(0, 5).map((element) => (
        <div key={element.id} className={styles.card}>
          <div className={styles.thumbnail}>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${element.poster_path}`} alt='poster' />
          </div>
          <div className={styles.title}>{element.title}</div>
          <div className={styles.date}>{format(new Date(element.release_date), 'd MMM yyyy', { locale: fr })}
          </div>
        </div>
      ))}
    </div>
  )
}
