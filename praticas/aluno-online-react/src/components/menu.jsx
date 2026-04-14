import './menu.css';

function Menu() {
  const menuItems = [
    { label: 'Dashboard', href: '?page=dashboard' },
    { label: 'Notas', href: '?page=notas' },
    { label: 'Faltas', href: '?page=faltas' },
    { label: 'Boletos', href: '?page=boletos' },
    { label: 'Requerimentos', href: '?page=requerimentos' },
    { label: 'Sair', className: 'sair', href: '?page=login' },
  ];

  const search = new URLSearchParams(window.location.search);
  const currentPage = search.get('page') || 'dashboard';

  return (
    <nav className="menu-nav">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${item.className || ''} ${item.className !== 'sair' && item.href === `?page=${currentPage}` ? 'active' : ''}`.trim()}
          >
            <a href={item.href || '#'}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;