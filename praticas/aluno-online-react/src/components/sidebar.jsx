import './sidebar.css';

function Sidebar(props) {
  return (
    <aside className="sidebar-container">
      <header className="sidebar-logo">
        <span className="logo-icon">🎓</span>
        <h2>{props.logoText || 'Aluno Online'}</h2>
      </header>
      {props.children}
    </aside>
  );
}

export default Sidebar;