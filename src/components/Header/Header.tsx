import { useState } from "react";
import { Link } from "react-router-dom"; // Substitui o <a href> padrão para SPA
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones
import styles from "./Header.module.css"; // Importando o CSS como objeto

export const Header = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  // Equivalente ao seu "classList.toggle('active')" do JS puro
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        HitaluDev
      </Link>

      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav>
        {/* Renderização Condicional da classe CSS */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/projetos" onClick={toggleMenu}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={toggleMenu}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
