import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/icons/logo.png";

export default function Header() {
    const [hide, setHide] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 200) setHide(true);
            else setHide(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <header className={styles.header} style={{top: hide ? "-100px" : "0"}}>
            <div className={styles.navigate}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Defri Logo" className={styles.logo} />
                </div>

                <div className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
                    <a href="#home" className={styles.navLink} onClick={() => setMenuOpen(false)}>Главная</a>
                    <a href="#technologies" className={styles.navLink} onClick={() => setMenuOpen(false)}>Технологии</a>
                    <a href="#team" className={styles.navLink} onClick={() => setMenuOpen(false)}>Команда</a>
                    <a href="#contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>Контакты</a>
                </div>

                <div className={styles.menuButton} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
}
