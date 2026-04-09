import './menu.css';

function Menu() {
  return (
    <nav className="menu-nav">
      <ul>
        <li>Dashboard</li>
        <li>Notas</li>
        <li>Faltas</li>
        <li>Boletos</li>
        <li>Requerimentos</li>
        <li className="sair">Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;