import { Link } from "react-router-dom";
import styles from "./Home.module.css";

// Ícones (substituindo o Devicon por React Icons)
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

// Importando a imagem (o Vite lida com isso automaticamente)
import profileImg from "../../assets/minha-foto.png";

export const Home = () => {
  // Lista de habilidades para o carrossel
  const skills = [
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "Spring", icon: <SiSpringboot color="#6db33f" /> },
    { name: "React", icon: <FaReact color="#61dafb" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
    { name: "AWS", icon: <FaAws color="#ff9900" /> },
    { name: "Docker", icon: <FaDocker color="#2496ed" /> },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <img src={profileImg} alt="Hitalu Roberto" />
        </div>

        <div className={styles.heroContent}>
          <h1>Desenvolvedor de Software Backend</h1>
          <p>Especialista em Java, Spring Boot e soluções escaláveis.</p>
          <Link to="/projetos" className={styles.btnPrimary}>
            Ver Portfólio
          </Link>
        </div>
      </section>

      {/* SKILLS CAROUSEL SECTION */}
      <section className={styles.skillsSection}>
        <h2>Competências</h2>
        <div className={styles.scroller}>
          <div className={styles.skillsList}>
            {/* Renderizamos a lista duas vezes para criar o loop infinito visual */}
            {skills.concat(skills).map((skill, index) => (
              <div key={index} className={styles.skillItem} title={skill.name}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aqui você pode adicionar as seções resumidas de "Projetos Recentes" e "Sobre" 
          seguindo a mesma lógica de classes e componentes */}
    </div>
  );
};
