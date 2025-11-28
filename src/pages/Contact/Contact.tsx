import { useState, FormEvent, ChangeEvent } from "react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
  // Estado único para o formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para armazenar mensagens de erro
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Função para validar o email (Regex trazido do seu js original)
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Função que roda toda vez que o usuário digita algo
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Atualiza o valor no estado
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validação em Tempo Real (igual ao seu "input" event listener)
    if (name === "name") {
      if (value.trim().length < 3) {
        setErrors((prev) => ({
          ...prev,
          name: "O nome deve conter ao menos 3 caracteres.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "O email inserido é inválido.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  // Função de Envio
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Verificação final antes de enviar
    const isNameValid = formData.name.length >= 3;
    const isEmailValid = validateEmail(formData.email);

    if (isNameValid && isEmailValid) {
      // Simulação de envio
      alert(
        `Mensagem enviada com sucesso para Nárnia! (Gostou, Professor?!?!) \n\nNome: ${formData.name}\nEmail: ${formData.email}`
      );

      // Limpar formulário
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "" });
    } else {
      // Se tentar enviar com erro, forçamos a exibição das mensagens
      if (!isNameValid)
        setErrors((prev) => ({ ...prev, name: "Nome muito curto!" }));
      if (!isEmailValid)
        setErrors((prev) => ({ ...prev, email: "Email inválido!" }));
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Entre em Contato</h2>

      <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
        {/* Campo Nome */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.inputError : ""}
            required
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
        </div>

        {/* Campo Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.inputError : ""}
            required
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email}</span>
          )}
        </div>

        {/* Campo Mensagem */}
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={styles.formButtons}>
          <button type="submit" className={styles.btnSubmit}>
            <FaPaperPlane style={{ marginRight: "8px" }} /> Enviar Email
          </button>

          <a
            href="https://wa.me/5569993002747?text=Ol%C3%A1,%20vim%20pelo%20seu%20portfolio..."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </div>
      </form>
    </section>
  );
};
