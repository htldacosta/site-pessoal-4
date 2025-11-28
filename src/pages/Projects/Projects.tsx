import { Project } from "../../types/Project";
import { FaGithub, FaFileAlt, FaCode } from "react-icons/fa";
import styles from "./Projects.module.css";

interface ProjectCardProps {
  data: Project;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <article className={styles.portfolioCard}>
      {/* Se tiver imagem, mostra ela. Se não, mostra um placeholder com ícone */}
      <div className={styles.cardImagePlaceholder}>
        {data.image ? (
          <img
            src={data.image}
            alt={data.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <FaCode />
        )}
      </div>

      <div className={styles.cardContent}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>

        <div className={styles.cardTech}>
          {data.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.cardButtons}>
          {data.docLink && (
            <a
              href={data.docLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnCard} ${styles.btnPrimary}`}
            >
              <FaFileAlt style={{ marginRight: "5px" }} /> Docs
            </a>
          )}

          <a
            href={data.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btnCard} ${styles.btnSecondary}`}
          >
            <FaGithub style={{ marginRight: "5px" }} /> Repo
          </a>
        </div>
      </div>
    </article>
  );
};
