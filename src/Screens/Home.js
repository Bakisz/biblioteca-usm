import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const items = [
        { name: 'Reservar Salas', path: '/Reservar' },
        { name: 'Arrendar Libros', path: '/Prestamos' },
        { name: 'Objetos Perdidos', path: '/Construccion' },
        { name: 'Conexión Wifi', path: '/Construccion' },
        { name: 'Nuevos Alumnos', path: '/Construccion' },
        { name: 'Repositorio digital', path: '/Construccion' },
        { name: 'Biblioteca Digital', path: '/Construccion' }
    ];

    return (
        <div className={styles.homeContainer}>
            <div>
            <div className={styles.miniDiv}></div>
                <Link to="/" className={`${styles.pathTo} ${styles.noUnderline}`}>Biblioteca Usm</Link> » <span>Inicio</span>
            </div>
            <div className={styles.gridContainer}>
                {items.map((item, index) => (
                    <Link to={item.path} key={index} className={styles.card}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;

