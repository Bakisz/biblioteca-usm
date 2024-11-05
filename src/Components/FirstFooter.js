import React from 'react'
import styles from './FirstFooter.module.css';

const FirstFooter = () => {
    const libraries = [
        { name: 'Biblioteca Casa Central', hours: '07:30 - 19:00' },
        { name: 'Biblioteca Sede Viña del Mar', hours: '08:30 - 19:30' },
        { name: 'Biblioteca Sede Concepcion', hours: '08:10 - 19:30' },
        { name: 'Biblioteca Campus Vitacura', hours: '08:15 - 19:45' },
        { name: 'Biblioteca Campus San Joaquin', hours: '08:00 - 19:00' }
    ];

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.leftSection}>
                <h2>Horarios de atención</h2>
                {libraries.map((library, index) => (
                    <div key={index} className={styles.libraryRow}>
                        <span>{library.name}</span>
                        <span>{library.hours}</span>
                    </div>
                ))}
            </div>
            <div className={styles.rightSection}>
                <img src="/accreditation-image.svg" alt="Acreditación" className={styles.accreditationImage} />
                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com/bibliotecausm/" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook-icon.png" alt="Facebook" className={styles.socialIcon} />
                    </a>
                    <a href="https://twitter.com/x/migrate?tok=7b2265223a222f4269626c696f7465636175736d222c2274223a313733303832353431377d04235a122df82030db0fe383e25badc9" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter-icon.png" alt="Twitter" className={styles.socialIcon} />
                    </a>
                    <a href="https://www.youtube.com/@biblioteca_usm" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube-icon.png" alt="YouTube" className={styles.socialIcon} />
                    </a>
                    <a href="https://www.instagram.com/biblioteca.usm/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram-icon.png" alt="Instagram" className={styles.socialIcon} />
                    </a>
                    <a href="https://www.linkedin.com/company/bibliotecausm/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin-icon.png" alt="LinkedIn" className={styles.socialIcon} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FirstFooter;