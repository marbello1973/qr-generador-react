import { QRImagen } from '../card-component/qr-imagen/QRImagen';
import { Texto } from '../card-component/texto/Texto';
import styles from './Card.module.css';
export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.qrimagen}>
        <QRImagen />           
      </div>
      <div>
        <Texto />
      </div>
    </div>
  )
}
