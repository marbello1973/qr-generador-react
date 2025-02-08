import styles from './Texto.module.css'


export const Texto = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.texto}>
          Improve your front-end       
        </p>
        <p className={styles.texto}>
          skills by building project
        </p>      
      </div>
      <div className={styles.containerlight}>
        <p className={styles.textolight}>
          Scan the QR code to visit Fronted 
        </p>
        <p className={styles.textolight}>      
          Mentor and take your coding skills to 
        </p>
        <p className={styles.textolight}>
          the next level
        </p>
      </div>
    </div>


  )
}
