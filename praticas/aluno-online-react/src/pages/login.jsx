import './login.css';

function Login() {
  return (
    <main className="login-container">
      <section className="login-card">
        <header className="login-header">
          <span className="login-icon">🎓</span>
          <h1>Aluno Online</h1>
        </header>

        <form className="login-form">
          <fieldset className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="seu.email@email.com"
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </fieldset>

          <button type="submit" className="login-button">
            Entrar
          </button>

          <footer className="login-footer">
            <a href="#forgot">Esqueceu a senha?</a>
          </footer>
        </form>
      </section>
    </main>
  );
}

export default Login;
