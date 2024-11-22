import React, { useState } from "react";
import { Link } from "react-router-dom"; // Para navegação entre páginas

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de Registro:", { username, email, password });
  };

  return (
    <div className="container">
      {/* Seção que engloba o título e o link de login */}
      <div className="auth-section">
        <h1>Crie sua conta</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Registrar</button>
        </form>

        {/* Link para login, colocado abaixo do formulário */}
        <div className="login-link">
          <p>
            Já tem uma conta? <Link to="/login">Faça login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

