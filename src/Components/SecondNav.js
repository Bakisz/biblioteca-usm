import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SecondNav.module.css';

const SecondNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Barra de navegación para pantallas grandes */}
            <div className={styles.navContainer}>
                <div className={styles.logoSection}>
                    <img
                        src='/logo.png'
                        alt="Logo Universidad"
                        className={styles.logo}
                    />
                </div>
                <div className={styles.menuSection}>
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

            {/* Barra de navegación para laptops/tablets */}
            <div className={styles.navContainerLaptop}>
                <div className={styles.logoNegro}>
                    <img
                        src='/logonegro.png'
                        alt="Logo Universidad"
                        className={styles.logoNegro}
                    />
                </div>
                <div className={`${styles.menuSection} ${menuOpen ? styles.menuOpen : ''}`}>
                    <Link to="/" className={styles.navLink}>Inicio</Link>
                    <div className={styles.dropdown}>
                        <p className={styles.dropdownLink}>
                            Apoyo a la investigación <span className={styles.smallArrow}>▼</span>
                        </p>
                        <div className={styles.dropdownMenu}>
                            <Link to="/construccion" className={styles.dropdownItem}>Bases de Datos A-Z</Link>
                            <Link to="/construccion" className={styles.dropdownItem}>Guías Temáticas</Link>
                            <Link to="/construccion" className={styles.dropdownItem}>Recursos académicos abiertos</Link>
                        </div>
                    </div>
                    <Link to="/construccion" className={styles.navLink}>Apoyo Memoristas</Link>
                    <Link to="/construccion" className={styles.navLink}>ODS</Link>
                    <Link to="/construccion" className={styles.navLink}>Quiénes somos</Link>
                </div>
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Abrir menú">
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </button>
            </div>
            <div className={styles.navContainerLaptop2}></div>
        </>
    );
};
//hi
export default SecondNav;
