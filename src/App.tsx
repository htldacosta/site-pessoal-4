import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";

import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";

// Importando o CSS Global que criamos antes
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fora das Routes para aparecer em todas as páginas */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>

      {/* Aqui você pode adicionar o Footer futuramente */}
      <footer
        className="footer"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <p>© 2024 HitaluDev. Todos os direitos reservados.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
