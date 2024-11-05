import React from 'react';
import { Link } from 'react-router-dom';
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
                {/* Enlace a la página principal */}
                <Link to="/" className={styles.navLink}>Inicio</Link>
                <div className={styles.dropdown}>
                    <p className={styles.dropdownLink}>
                        Apoyo a la investigación <span className={styles.smallArrow}>▼</span>
                    </p>
                    <div className={styles.dropdownMenu}>
                        <Link to="/construccion" className={styles.dropdownItem}>
                            Bases de Datos A-Z
                        </Link>
                        <Link to="/construccion" className={styles.dropdownItem}>
                            Guías Temáticas
                        </Link>
                        <Link to="/construccion" className={styles.dropdownItem}>
                            Recursos académicos abiertos
                        </Link>
                    </div>
                </div>
                <Link to="/Construccion" className={styles.navLink}>Apoyo Memoristas</Link>
                <Link to="/Construccion" className={styles.navLink}>ODS</Link>
                <Link to="/Construccion" className={styles.navLink}>Quiénes somos</Link>
            </div>
        </div>
    );
}

export default SecondNav;
