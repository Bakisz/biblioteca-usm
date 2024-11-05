import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    const items = [
        'Reservar Salas',
        'Arrendar Libros',
        'Objetos Perdidos',
        'Conexión Wifi',
        'Nuevos Alumnos',
        'Repositorio digital',
        'Biblioteca Digital'
    ];

    return (
        <div className={styles.homeContainer}>
            <div>
                <div className={styles.miniDiv}></div>
                <span className={styles.pathTo}>Biblioteca Usm</span> » <span>Inicio</span>
            </div>
            <div className={styles.gridContainer}>
                {items.map((item, index) => (
                    <div key={index} className={styles.card}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

