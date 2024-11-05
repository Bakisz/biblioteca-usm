import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const items = [
        { name: 'Reservar Salas', path: '/Reservar' },
        { name: 'Arrendar Libros', path: '/Prestamos' },
        { name: 'Objetos Perdidos', path: '#' },
        { name: 'Conexión Wifi', path: '#' },
        { name: 'Nuevos Alumnos', path: '#' },
        { name: 'Repositorio digital', path: '#' },
        { name: 'Biblioteca Digital', path: '#' }
    ];

    return (
        <div className={styles.homeContainer}>
            <div>
                <div className={styles.miniDiv}></div><span className={styles.pathTo}>Biblioteca Usm</span> » <span>Inicio</span>
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

