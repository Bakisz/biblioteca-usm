import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './LoanBooks.module.css';

const LoanBooks = () => {
    return (
        <div className={styles.loanBooksContainer}>
            <div>
                <div className={styles.miniDiv}></div><span className={styles.pathTo}>Biblioteca Usm</span> » <span>Prestamos</span>
            </div>
            <h2 className={styles.titlee}>Populares</h2>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                    <img src="/imagen1.jpg" alt="Imagen 1" style={{ width: '300px', Height: '300px', objectFit: 'cover', margin: '0 auto' }} />
                </div>
                <div>
                    <img src="/imagen2.jpg" alt="Imagen 2" style={{ width: '300px', Height: '300px', objectFit: 'cover', margin: '0 auto' }} />
                </div>
                <div>
                    <img src="/imagen3.jpg" alt="Imagen 3" style={{ width: '300px', Height: '300px', objectFit: 'cover', margin: '0 auto' }} />
                </div>
            </Carousel>
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
        </div>
    );
};

export default LoanBooks;
