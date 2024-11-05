import React from 'react';
import styles from './BusquedaLibro.module.css';

const BusquedaLibro = () => {
  return (
    <div className={styles.busquedaLibro}>
        <div>
            <div className={styles.miniDiv}></div><span className={styles.pathTo}>Biblioteca Usm</span> » <span>Prestamos</span>
        </div>
      {/* Buscador de libros */}
      <div className={styles.searchContainer}>
                <select className={styles.select}>
                    <option>Todas las sedes</option>
                    <option>Campus San Joaquin</option>
                    <option>Casa Central</option>
                    <option>Campus Vitacura</option>
                </select>
                <select className={styles.select}>
                    <option>Catálogo de la Biblioteca</option>
                    <option>Departamento de Informatica</option>
                    <option>Departamento de Fisica</option>
                </select>
                <input
                    type="text"
                    placeholder="Buscar Libro"
                    className={styles.searchInput}
                />
                <img src="/lupa.png" alt="lupa" style={{ width: '40px', Height: '40px', objectFit: 'cover', margin: '0 auto',cursor:'pointer',marginLeft:'10px' }} />
            </div>
            <b></b>
      {/* Listado de libros */}
      <div className={styles.bookList}>
        <div className={styles.bookItem}>
          <div className={styles.bookImage}>
            <img src="/mathematicsphysicals.png" alt="Imagen del Libro" />
          </div>
          <div className={styles.bookDescription}>
            <h3>Nombre del Libro</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Reservar</button>
          </div>
        </div>
        <div className={styles.bookItem}>
          <div className={styles.bookImage}>
          <div className={styles.bookImage}>
            <img src="/dibujidisenioingenieria.png" alt="Imagen del Libro" />
          </div>
          </div>
          <div className={styles.bookDescription}>
            <h3>Nombre del Libro</h3>
            <p>Descripción</p>
            <button>Reservar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusquedaLibro;