import { useEffect, useRef } from "react";
import styles from "./About.module.css";

export const About = () => {
  // Array de referências para os elementos que vamos animar
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  // Seus dados de texto originais
  const timelineData = [
    {
      title: "1# Meu começo...",
      text: "Minha jornada no mundo da programação começou em 2017, motivada pela curiosidade e pelo desejo de construir um App e publicar na Play Store. Foi através de um curso online de Java que dei meus primeiros passos na lógica. Essa paixão inicial foi um marco, mas minha evolução foi interrompida em 2019. O tempo longe do código me mostrou a importância de persistir, e em 2021 retornei à programação focado em JavaScript, HTML5 e CSS3.",
    },
    {
      title: "2# Carreira Freelancer",
      text: "O ano de 2022 marcou um ponto de virada: iniciei minha carreira como desenvolvedor freelancer. Nos dois anos seguintes, mergulhei no universo do desenvolvimento front-end com React.js. Foi uma fase de intenso aprendizado prático. Ao final de 2023, percebi a necessidade de me aprofundar no back-end, focando em Java e Spring Boot para sistemas de alta performance.",
    },
    {
      title: "3# Consolidação como Backend",
      text: "Iniciei a graduação em Engenharia de Software em 2024. A faculdade me proporcionou base sólida em arquitetura e POO. Hoje, sou desenvolvedor Backend voltado para performance e escalabilidade, com conhecimentos em Java, Spring Boot, AWS, Docker e Kubernetes, aplicando SOLID e TDD no dia a dia.",
    },
  ];

  // Lógica da Animação (Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adiciona a classe .visible do CSS Module
            entry.target.classList.add(styles.visible);
            // Para de observar depois que apareceu (opcional)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Dispara quando 20% do card estiver visível
    );

    // Manda observar cada card que capturamos no ref
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup: desconecta ao sair da página
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Sobre Mim</h2>

      <div className={styles.timelineContainer}>
        {timelineData.map((item, index) => (
          <article
            key={index}
            className={styles.timelineCard}
            // Mágica do Ref: adiciona este elemento ao nosso array de refs
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
