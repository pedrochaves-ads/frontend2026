import './dashboard.css';
import Sidebar from '../components/sidebar';
import Menu from '../components/menu';
import Topbar from '../components/topbar';
import Card from '../components/card';


const cards = [
  {
    titulo: 'Mural de Avisos',
    items: [
      'Inscrição para o projeto de extensão',
      'Eleição para representante de turma',
    ],
  },
  {
    titulo: 'Calendário Acadêmico',
    items: [
      '23/02 - Início do período letivo 2026-1',
      '25/04 - Prazo final para aplicação da P1',
      '23/06 - Prazo final para aplicação da P2',
      '04/07 - Fim do período letivo 2026-1',
    ],
  },
  {
    titulo: 'Minhas Disciplinas',
    items: [
      'BI e Data Warehousing',
      'Construção de Frontend',
      'Manutenção e Devops',
    ],
  },
];

function Dashboard() {
  return (
    <section className="layout-app">
      <Sidebar logoText="Aluno Online">
        <Menu />
      </Sidebar>
      <main className="conteudo-principal">
        <Topbar titulo="Dashboard" usuario="👨‍🎓" />
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

export default Dashboard;