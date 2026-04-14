import './login.css';

function Login() {
  return (
    <main className="login-container">
      <section className="login-card">
        <header className="login-header">
          <span className="login-icon">🎓</span>
          <h1>Aluno Online</h1>
        </header>

        <form className="login-form" action="?page=dashboard">
          <fieldset className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              required
            />
          </fieldset>

          <fieldset className="form-group">
            <label>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              required
            />
          </fieldset>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </section>
      <footer className="login-footer-text">© 2026. Todos os direitos reservados.</footer>
    </main>
  );
}

export default Login;
