import React, { useState } from "react";
import styles from "./Team.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Team() {
  const teamMembers = [
    { 
      name: "Egor", 
      role: "Fullstack Developer", 
      rating: 5, 
      miniBio: "Мастер React и Node.js.", 
      bio: "Мастер React и Node.js, любит экспериментировать с анимациями и постоянно ищет новые подходы в веб-разработке." 
    },
    { 
      name: "Ilya", 
      role: "Frontend Developer", 
      rating: 4, 
      miniBio: "Создает красивые UI.", 
      bio: "Создает красивые UI и заботится о UX. Экспериментирует с анимациями и интерактивными элементами." 
    },
    { 
      name: "Anna", 
      role: "UI/UX Designer", 
      rating: 5, 
      miniBio: "Проектирует интерфейсы.", 
      bio: "Проектирует интерфейсы и анимации для наших приложений, делает UX приятным и интуитивным." 
    },
    { 
      name: "Dmitry", 
      role: "Backend Developer", 
      rating: 4, 
      miniBio: "Оптимизирует серверы.", 
      bio: "Оптимизирует серверные процессы и базы данных, внедряет новые технологии для быстрого отклика приложений." 
    },
    { 
      name: "Olga", 
      role: "Project Manager", 
      rating: 5, 
      miniBio: "Следит за сроками.", 
      bio: "Следит за сроками и координирует команду, умеет мотивировать и распределять задачи эффективно." 
    },
    { 
      name: "Max", 
      role: "DevOps Engineer", 
      rating: 4, 
      miniBio: "Настраивает инфраструктуру.", 
      bio: "Настраивает CI/CD, деплой проектов и следит за стабильностью серверов и окружения." 
    }
  ];

  const [flipped, setFlipped] = useState({});

  const toggleFlip = (name) => {
    setFlipped(prev => ({ ...prev, [name]: !prev[name] }));
  }

  return (
    <div id="team" className={styles.team}>
      <h2 className={styles.title}>Наша команда</h2>
      <p className={styles.description}>
        Команда профессионалов, которые создают наши проекты
      </p>
      <div className={styles.grid}>
        {teamMembers.map((member, idx) => (
          <div 
            key={member.name} 
            className={`${styles.card} ${flipped[member.name] ? styles.flipped : ""}`} 
            style={{ marginTop: idx % 2 === 0 ? "30px" : "0px" }} 
            onClick={() => toggleFlip(member.name)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.avatar}>
                  <img src={`https://i.pravatar.cc/150?img=${idx + 1}`} alt={member.name} />
                </div>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) =>
                    i < member.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                </div>
                <p className={styles.miniBio}>{member.miniBio}</p>
              </div>
              <div className={styles.cardBack}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) =>
                    i < member.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                </div>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
