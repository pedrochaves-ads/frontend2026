import './sidebar.css';
import Menu from './menu';

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <header className="sidebar-logo">
        <span className="logo-icon">🎓</span>
        <h2>Aluno Online</h2>
      </header>
    </aside>
  );
}

export default Sidebar;