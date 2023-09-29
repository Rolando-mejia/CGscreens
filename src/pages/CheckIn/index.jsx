import { useParams } from 'react-router-dom'
import Footer from '../../components/Layout/Footer'
import Header from '../../components/Layout/Header'
import Info from '../../components/Shared/Info'
import styles from './Checkin.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { backend } from '../../config'

const CheckIn = () => {

  const {t} = useTranslation();

  const { id } = useParams();

  const [info, setInfo] = useState({});

  const getCheckinData = async() => {
    try{
      const { data } = await axios.get(`${backend}/api/Checkin/${id}`);
      setInfo(data);
    }catch(err){
      console.log(err);
    }
  }
 
  useEffect(() => {
    const intervalo = setInterval(() => {
    getCheckinData();
    }, 5000);
    return () => clearInterval(intervalo);
  }, [id])

  return (
    <div className={styles.layout}>
      <Header title={t('Recepción de Check In')} />
      {info?.StatusDisplay ? (

      <div className={styles.container}>
        <div className={styles.logo}>
          <img src= {`${backend}${info.idAirline.logoAirline}`} />
        </div>

        <div className={styles.fight_info}>
            
            <Info title={t('Vuelo')} info={info?.FlightNumber} />

            <div className={styles.col}>
            
            
            <Info title={t('Destino')} info={info?.idFlightDestination?.nombreFlightDestination} />
           
            </div>
            

        </div>
      </div>
      ):(

        <div className={styles.logo_air}>
          <img src='/logo-toncontin.png' />
        </div>

        )}

        <Footer />
    </div>
  )
}

export default CheckIn
