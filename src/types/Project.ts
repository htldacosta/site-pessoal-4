export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[]; // Um array de textos (ex: ['Java', 'Spring'])
  repoLink: string; // Link do GitHub
  docLink?: string; // O '?' indica que é opcional (nem todo projeto tem doc)
  image?: string; // Opcional: Caminho da imagem
}
