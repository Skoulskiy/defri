import styles from "./TopSection.module.css";
import Typewriter from 'typewriter-effect';

import bgVideo from "../../assets/videos/background.mp4";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-right-circle.svg";

export default function TopSection() {

    return (
        <section className={styles["top-section"]} id="home">
            <video autoPlay loop muted className={styles["video-bg"]}>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className={styles["content"]}>
                <h1 className={styles["title"]}>Defri<br />Company</h1>
                <div className={styles["typewriter"]}>
                    <Typewriter
                        options={{
                            strings: ['Defri — студия разработки, создающая современные сайты, Telegram-боты и кастомные JavaScript-скрипты.', 'Мы используем HTML5, CSS3, SCSS, JavaScript, React, React Native, Node.js, MUI и Framer Motion, чтобы превращать идеи в быстрые, визуально выразительные и удобные цифровые продукты.'],
                            autoStart: true,
                            loop: true,
                            delay:100,
                            deleteSpeed: 50,
                        }}
                    />
                </div>
                <div className={styles["buttons"]}>
                    <a href="#contacts" className={styles['contact-link']}>→ Связаться с нами</a>
                    {/* <a href="#" className={styles['price-link']}> <ArrowIcon className={styles.arrow} /> Прайс-лист</a> */}
                </div>
            </div>
        </section>
    );
}