import QRCode from 'react-qr-code';
//import imagen from '../../../assets/images/image-qr-code.png';
import styles from './QRImagen.module.css';
import { useRef, useState } from 'react';
import domtoimage from 'dom-to-image';


export const QRImagen = () => {
  
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string | undefined>('');
  
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
            <button onClick={downloadQR} className={styles.botonQR} >
              <p>Descargar QR</p>
            </button>
          </>
        )}
      {/* <img className={styles.imagen} src={imagen} alt='QR'/>    */}
    </div>
  )
}
