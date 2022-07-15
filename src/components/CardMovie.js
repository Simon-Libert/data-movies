import React from 'react'
import styles from '../styles/CardMovie.module.css'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

const genres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Aventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comédie"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentaire"
  },
  {
    "id": 18,
    "name": "Drame"
  },
  {
    "id": 10751,
    "name": "Familial"
  },
  {
    "id": 14,
    "name": "Fantastique"
  },
  {
    "id": 36,
    "name": "Histoire"
  },
  {
    "id": 27,
    "name": "Horreur"
  },
  {
    "id": 10402,
    "name": "Musique"
  },
  {
    "id": 9648,
    "name": "Mystère"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science-Fiction"
  },
  {
    "id": 10770,
    "name": "Téléfilm"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "Guerre"
  },
  {
    "id": 37,
    "name": "Western"
  }
]

export default function CardMovie({ data }) {
  let listGenres = []
  if (data.genre_ids === undefined) {
    listGenres = data.genres.map((element) => element.name)
  }
  else {
    listGenres = data.genre_ids.map((element) => {
      return genres.find((genre) => genre.id === element).name
    })
  }

  const circumference = 42 * 2 * Math.PI; // 42 est le rayon de "circle"
  const strokeDasharray = `${circumference} ${circumference}`;
  const progress = circumference - data.vote_average * 10 / 100 * circumference

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})` }}
    >
      <div className={styles.cardBackground}>
        <div className={styles.cardContent}>
          <div className={styles.poster}>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`} alt='poster' />
          </div>
          <div className={styles.info}>
            <h2>{data.title + ' '}
              <span>{data.release_date !== undefined ? `(${format(new Date(data.release_date), 'yyyy', { locale: fr })})` : null}</span>
            </h2>
            <p>
              {data.release_date !== undefined || format(new Date(data.release_date), 'd MMM yyyy', { locale: fr })}
              &#8226;
              {listGenres.join(", ")} &#8226; 2h12m
            </p>

            <div className={styles.noteComponent}>
              <div className={styles.progressRing}>
                <svg className={styles.ring} height="100" width="100">
                  <circle strokeWidth="9" stroke="#006600" fill="transparent" r="42" cx="50" cy="50" />
                  <circle
                    strokeWidth="9"
                    stroke="#009900"
                    fill="transparent"
                    r="42" cx="50" cy="50"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={progress}
                  />
                </svg>
                <div className={styles.ringText}>{data.vote_average * 10}<span>%</span></div>
              </div>
              <div className={styles.noteInfo}>Note des utilisateurs</div>
            </div>
            <h3>Synopsis</h3>
            <p>{data.overview === '' ? 'Aucun Synopsis disponible' : data.overview}</p>
          </div>
        </div>
      </div>
    </div >
  )
}
