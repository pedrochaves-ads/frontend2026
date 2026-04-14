import './faltas.css';
import Sidebar from '../components/sidebar';
import Menu from '../components/menu';
import Topbar from '../components/topbar';
import Card from '../components/card';


const cards = [
  {
    titulo: 'Faltas Recentes',
    items: ['BI e Data Warehousing - 0 faltas', 'Construção de Frontend - 0 faltas'],
  },
  {
    titulo: 'Presença Geral',
    items: ['Presença em 2026.1: 100%', 'Presença em 2025.2: 87.5%'],
  },
  {
    titulo: 'Situação Acadêmica',
    items: ['Nenhuma falta pendente', 'Todas as disciplinas em dia'],
  },
];

function Faltas() {
  return (
    <section className="layout-app">
      <Sidebar logoText="Aluno Online">
        <Menu />
      </Sidebar>
      <main className="conteudo-principal">
        <Topbar titulo="Faltas" usuario="👨‍🎓" />
        <section className="miolo-pagina">
          <section className="cards-area">
            {cards.map((card, index) => (
              <Card key={index} titulo={card.titulo} items={card.items} />
            ))}
          </section>
        </section>
      </main>
    </section>
  );
}

export default Faltas;