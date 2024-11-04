import React from 'react';
import styles from './SecondNav.module.css'; 

const SecondNav = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.logoSection}>
                <img
                    src='/logo.png'
                    alt="Logo Universidad"
                    className={styles.logo}
                />
            </div>
            <div className={styles.menuSection}>
                <p>Inicio</p>
                <p>Apoyo a la investigación <span className={styles.smallArrow}>▼</span></p>
                <p>Apoyo Memoristas</p>
                <p>ODS</p>
                <p>Quiénes somos</p>
            </div>
        </div>
    );
}

export default SecondNav;
