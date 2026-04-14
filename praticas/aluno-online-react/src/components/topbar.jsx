import './topbar.css';

function Topbar(props) {
  return (
    <header className="topbar-container">
      <section className="topbar-content">
        <h1>{props.titulo || 'Portal Aluno Online'}</h1>
        <aside className="user-icon">{props.usuario || '👤'}</aside>
      </section>
    </header>
  );
}

export default Topbar;