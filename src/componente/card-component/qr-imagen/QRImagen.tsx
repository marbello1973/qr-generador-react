import QRCode from 'react-qr-code';
import styles from './QRImagen.module.css';
import { useRef, useState } from 'react';
import { ButtonQR } from '../buttonqr/ButtonQR';

export const QRImagen = () => {
  
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string | undefined>('');

  return (    
    <div className={styles.container}>      
      <input 
        className={styles.QRinput} 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder='Introduce el texto para el QR'
      />
        { text && (
          <>
            <div ref={qrCodeRef} className={styles.qrimagen}>
              <QRCode
                id='qrCodeEl'
                value={text}
                size={256}
                level='H'
                className={styles.qrimagen}
                />
            </div>
            <ButtonQR qrCodeRef={qrCodeRef} />            
          </>
        )}      
    </div>
  )
}
