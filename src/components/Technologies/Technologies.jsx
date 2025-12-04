import React from "react";
import { motion } from "framer-motion";
import styles from "./Technologies.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiDocker } from "react-icons/si";

export default function Technologies() {
  const techList = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SCSS", icon: <FaSass /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <SiDocker /> }
  ];
  const loopList = [...techList, ...techList];

  return (
    <div className={styles.technologies} id="technologies" >
      <h2 className={styles.title}>Используемые технологии</h2>
      <p className={styles.description}>
        В наших проектах мы применяем современные технологии для создания качественных веб и мобильных приложений
      </p>

      <div className={styles.sliderWrapper}>
        <motion.div
          className={styles.slider}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {loopList.map((tech, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{tech.icon}</div>
              <div className={styles.name}>{tech.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
