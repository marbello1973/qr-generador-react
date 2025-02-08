import domtoimage from 'dom-to-image';
import styles from './ButtonQR.module.css';
import React, { RefObject } from 'react';

interface ButtonQRProps { qrCodeRef: RefObject<HTMLDivElement | null> }

export const ButtonQR: React.FC<ButtonQRProps> = ( {qrCodeRef}) => {  

    const downloadQR = () => {
        if (qrCodeRef.current) {      
          domtoimage.toPng(qrCodeRef.current)
            .then((dataUrl: string) => {
              const downloadLink = document.createElement('a');
              downloadLink.href = dataUrl;
              downloadLink.download = 'qrCode.png';
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
            })
            .catch((error: Error) => {
              console.error('Error al generar la imagen:', error);
            });
        }
      }; 

    return (
        <button onClick={downloadQR} className={styles.botonQR} >
            <p>Descargar QR</p>
        </button>
  )
}
