import React from 'react'
import styles from '../styles/CardMovie.module.css'

export default function CardMovie() {
  return (
    <div className={styles.card}>
      <div className={styles.cardBackground}>
        <div className={styles.cardContent}>
          <div className={styles.poster}>
            <img src="https://i-mom.unimedias.fr/2021/04/19/shang_chi_affiche_marvel.jpg"
              alt="Shang-Chi et la légende des Dix Anneaux" />
          </div>

          <div className={styles.info}>
            <h2>Shang-Chi et la légende des Dix Anneaux <span>(2021)</span></h2>
            <p>01/09/2021 &#8226; Action, Aventure, Fantastique &#8226; 2h12m</p>

            <div className={styles.note}>
              77%

              {/* <div className={styles.outer_ring}>
                <div className={styles.user_score_chart} data-percent="77.0" data-track-color="#204529" data-bar-color="#21d07a">
                  <div className={styles.percent}>
                    <span className={styles.icon icon-r77">}/span>
                  </div>
                </div>
              </div>
              <canvas width="60" height="60"></canvas> --> */}

              Note des utilisateurs
            </div>

            <h3>Synopsis</h3>
            <p>Shang-Chi va devoir affronter un passé qu'il pensait avoir laissé derriére lui lorsqu'il est pris dans
              la
              toile de la mystérieuse organisation des dix anneaux.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
