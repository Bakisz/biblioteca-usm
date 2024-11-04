import React from 'react';
import styles from './FirstNav.module.css';

const FirstNav = () => {
    const links = [
        {
            id: 1,
            link: "https://tv.usm.cl/",
            texto: "USM TV",
            className: styles.linkUsm
        },
        {
            id: 2,
            link: "https://admision.usm.cl/",
            texto: "Postula Aquí",
            className: styles.linkPostula
        }
    ];

    return (
        <div className={styles.navContainer}>
            <div className={styles.leftSection}>
                <p className={styles.item}>
                    <i className="fas fa-universal-access"></i> Accesibilidad <span className={styles.smallArrow}>▼</span>
                </p>
                <p className={styles.item}>EN</p>
                <p className={styles.item}>ES</p>
            </div>
            <div className={styles.rightSection}>
                <p className={styles.item}>Sitios de interés <span className={styles.smallArrow}>▼</span></p>
                <p className={styles.item}>Información para <span className={styles.smallArrow}>▼</span></p>
                <p className={styles.item}>Servicios <span className={styles.smallArrow}>▼</span></p>
                <div className={styles.linksContainer}>
                    {links.map(x => (
                        <a
                            key={x.id}
                            href={x.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={x.className}
                        >
                            {x.texto}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FirstNav;

