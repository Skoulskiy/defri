import React from "react";
import styles from "./Footer.module.css";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>Defri</div>
        <nav className={styles.footerNav}>
          <a href="#home">Главная</a>
          <a href="#technologies">Технологии</a>
          <a href="#team">Команда</a>
          <a href="#contact">Контакты</a>
        </nav>
        <div className={styles.socialLinks}>
          <a href="https://t.me/defri" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
          <a href="https://github.com/defri" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/company/defri" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className={styles.footerLine}></div>
      <div className={styles.footerBottom}>© 2025 Defri. Все права защищены.</div>
    </footer>
  );
}
