import './notas.css';
import Sidebar from '../components/sidebar';
import Menu from '../components/menu';
import Topbar from '../components/topbar';
import Card from '../components/card';


const cards = [
  {
    titulo: 'Resumo de Notas',
    items: ['BI e Data Warehousing - SR', 'Construção de Frontend - SR'],
  },
  {
    titulo: 'Média Semestral',
    items: ['2025.2: MM', '2025.1: MS/SS'],
  },
  {
    titulo: 'Acompanhamento',
    items: ['A1 e A2 lançadas', 'A3 ainda pendente'],
  },
];

function Notas() {
  return (
    <section className="layout-app">
      <Sidebar logoText="Aluno Online">
        <Menu />
      </Sidebar>
      <main className="conteudo-principal">
        <Topbar titulo="Notas" usuario="👨‍🎓" />
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

export default Notas;
