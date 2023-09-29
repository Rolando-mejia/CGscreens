import { useTime } from '../../../hooks/useTine'
import styles from './Footer.module.css'

const Footer = () => {
    const {time} = useTime();
  return (
    <footer className={styles.footer}>
      <h2>{time}</h2>
    </footer>
  )
}

export default Footer
