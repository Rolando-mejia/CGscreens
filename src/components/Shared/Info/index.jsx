import styles from './Info.module.css';

const Info = ({title, info}) => {
  return (
    <div className={styles.info_container}>
        <p className={styles.title}>{title}</p>
        <h2 className={styles.info}>{info}</h2> 
    </div>
  )
}

export default Info
