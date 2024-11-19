import React from 'react'
import styles from './SecondFooter.module.css';


const SecondFooter = () => {
    return (
        <div className={styles.secondFooter}>
          {/* Imagen 1 con enlace */}
          <a href="https://acceso.mineduc.cl/" target="_blank" rel="noopener noreferrer">
            <img src="/acceso.png" alt="Acceso Mineduc" />
          </a>
    
          {/* Imagen 2 con enlace */}
          <a href="https://www.consejoderectores.cl/" target="_blank" rel="noopener noreferrer">
            <img src="/rectores.png" alt="Consejo de Rectores" />
          </a>
    
          {/* Imagen 3 con enlace */}
          <a href="https://redg9.cl/" target="_blank" rel="noopener noreferrer">
            <img src="/g9.png" alt="Red G9" />
          </a>
    
          {/* Imagen 4 con enlace */}
          <a href="https://consejoderectoresvalparaiso.cl/" target="_blank" rel="noopener noreferrer">
            <img src="cruv.png" alt="CRUV" />
          </a>
    
          {/* Imagen 5 con enlace */}
          <a href="https://www.reuna.cl/" target="_blank" rel="noopener noreferrer">
            <img src="reuna.png" alt="Reuna" />
          </a>
    
          {/* Imagen 6 con enlace */}
          <a href="https://www.universia.net/cl/home.html" target="_blank" rel="noopener noreferrer">
            <img src="universia.png" alt="Universia" />
          </a>
        </div>
      );
    };
//hi
export default SecondFooter;