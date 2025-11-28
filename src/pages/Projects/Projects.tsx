import { Project } from "../../types/Project";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const projectsList: Project[] = [
    {
      id: 1,
      title: "Serviço de E-mail",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Um serviço robusto para envio de emails transacionais.",
      technologies: ["Java", "Spring Boot", "AWS"],
      repoLink: "https://github.com/htldacosta",
      docLink: "https://github.com/htldacosta",
    },
    {
      id: 2,
      title: "Newsletter System",
      description:
        "Sistema completo de newsletter com agendamento e gestão de assinantes.",
      technologies: ["Java", "Spring", "MongoDB", "AWS"],
      repoLink: "https://github.com/htldacosta",
      docLink: "#",
    },
    {
      id: 3,
      title: "Cadastro de Alunos",
      description:
        "CRUD completo para gestão acadêmica com relatórios e dashboard.",
      technologies: ["Java", "PostgreSQL", "Spring"],
      repoLink: "https://github.com/htldacosta",
      docLink: "#",
    },
    {
      id: 4,
      title: "Simulador de Investimentos",
      description:
        "Aplicação fullstack para simulação de rendimentos com base em índices financeiros.",
      technologies: ["Java", "Spring Boot", "React.js", "Golang", "PostgreSQL"],
      repoLink: "https://github.com/htldacosta",
    },
  ];

  return (
    <section className={styles.portfolioSection}>
      <h2 className={styles.sectionTitle}>Meus Projetos</h2>

      <div className={styles.portfolioGrid}>
        {projectsList.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
};
