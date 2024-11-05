import React from 'react';
import styles from './EnConstruccion.module.css';

const EnConstruccion = () => {
    return (
      <div className={styles.container}>
        <img src={"/wip.png"} alt="Trabajando en ello" className={styles.image} />
        <h1>Estamos trabajando en ello</h1>
        <p>Esta sección aún está en desarrollo. ¡Vuelve pronto para más contenido!</p>
      </div>
    );
  };
  
  export default EnConstruccion;