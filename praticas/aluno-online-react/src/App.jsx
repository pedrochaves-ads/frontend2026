import Dashboard from './pages/dashboard';
import Faltas from './pages/faltas';
import Notas from './pages/notas';
import Boletos from './pages/boletos';
import Requerimentos from './pages/requerimentos';
import Login from './pages/login';

function App() {
  const search = new URLSearchParams(window.location.search);
  const page = search.get('page') || 'login';

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login />;
      case 'notas':
        return <Notas />;
      case 'faltas':
        return <Faltas />;
      case 'boletos':
        return <Boletos />;
      case 'requerimentos':
        return <Requerimentos />;
      default:
        return <Dashboard />;
    }
  };

  return renderPage();
}

export default App;