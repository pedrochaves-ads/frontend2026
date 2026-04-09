import './boletos.css';
import Sidebar from '../components/sidebar';
import Menu from '../components/menu';
import Topbar from '../components/topbar';
import Card from '../components/card';

function Boletos() {
  return (
    <section className="layout-app">
      <Sidebar />
      <Menu />
      <main className="conteudo-principal">
        <Topbar />
        <section className="miolo-pagina">
          <section className="cards-area">
            <Card />
            <Card />
            <Card />
          </section>
        </section>
      </main>
    </section>
  );
}
export default Boletos;
