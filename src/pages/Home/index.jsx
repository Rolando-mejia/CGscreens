import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div>
      <h2 className={styles.title}>Gestion de posiciones</h2>
      <div className={styles.container}>
        <div>
          <h3>Checkin Counter</h3>
          <div className={styles.elements}>            
          {[1,2,3,4,5,6,7,8,9,10].map((check) => (
          <Link to={`/checkin/${check}`}><span>Checkin {check}</span> <span>Ingresar</span> </Link>
          )) }
          </div>

        </div>
        <div>
        <h3>Gates</h3>
        <div className={styles.elements}>            

        {[1,2,3,4,5,6,7,8,9,10].map((check) => (
          <Link to={`/gate/${check}`}><span>Gate {check}</span> <span>Ingresar</span> </Link>
          )) }
        </div>
        </div>
      </div>
    </div>
  )
}