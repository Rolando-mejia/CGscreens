import { useParams } from 'react-router-dom'
import Footer from '../../components/Layout/Footer'
import Header from '../../components/Layout/Header'
import Info from '../../components/Shared/Info'
import styles from './Gate.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { backend } from '../../config'

const Gate = () => {

  const {t} = useTranslation();

  const { id } = useParams();

  const [info, setInfo] = useState({});

  const getGateData = async() => {
    try{
      const { data } = await axios.get(`${backend}/api/Gate/${id}`);
      setInfo(data);
    }catch(err){
      console.log(err);
    }
  }
 
  useEffect(() => {
    const intervalo = setInterval(() => {
    getGateData();
    }, 5000);
    return () => clearInterval(intervalo);
  }, [id])

  return (
    <div className={styles.layout}>
      <Header title={t('PUERTA')} />
      {info?.StatusDisplay ? (

      <div className={styles.container}>
        <div className={styles.logo}>
          <img src= {`${backend}${info.idAirline.logoAirline}`} />
        </div>

        <div className={styles.fight_info}>
            
            <div className={styles.col}>
            <Info title={t('Vuelo')} info={info?.FlightNumber} />
            </div>
            <Info title={t('Estado')} info={t(info?.idStatusFlight?.nombreStatusFlight)} />
             <div className={styles.info_container}>
                <p className={styles.title}>{t('Puerta')}</p>
                <h2 className={styles.info}>{info?.GateNumber}</h2> 
            </div>
            <div>
                       
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

export default Gate
