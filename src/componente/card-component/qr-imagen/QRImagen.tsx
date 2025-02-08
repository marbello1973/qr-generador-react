import QRCode from 'react-qr-code';
//import imagen from '../../../assets/images/image-qr-code.png';
import styles from './QRImagen.module.css';
import { useState } from 'react';
//import { downloadQR }  from './QRDownload';

const downloadQR = () => {
  const canvas = document.getElementById('qrCodeEl') as HTMLCanvasElement;
  const pngUrl = canvas.toDataURL('image/png');
  const downloadLink = document.createElement('a');
  downloadLink.href = pngUrl;
  downloadLink.download = 'qrCode.png';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const QRImagen = () => {

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
            <QRCode
              id='qrCodeEl'
              value={text}
              size={256}
              level='H'
              className={styles.qrimagen}
              />
            <button onClick={downloadQR} className={styles.botonQR} >
              Descargar QR
            </button>
          </>
        )}
      {/* <img className={styles.imagen} src={imagen} alt='QR'/>    */}
    </div>
  )
}
