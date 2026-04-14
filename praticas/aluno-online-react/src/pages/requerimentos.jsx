import './requerimentos.css';
import Sidebar from '../components/sidebar';
import Menu from '../components/menu';
import Topbar from '../components/topbar';
import Card from '../components/card';


const cards = [
  {
    titulo: 'Requerimentos Abertos',
    items: ['Revisão de Menção', 'Dispensa de Disciplina'],
  },
  {
    titulo: 'Status Atual',
    items: ['Indeferido x 2', 'Deferido x 3'],
  },
  {
    titulo: 'Últimos Protocolos',
    items: ['Trancamento de Matrícula', 'Mudança de Turno', 'Renovação de Matrícula'],
  },
];

function Requerimentos() {
  return (
    <section className="layout-app">
      <Sidebar logoText="Aluno Online">
        <Menu />
      </Sidebar>
      <main className="conteudo-principal">
        <Topbar titulo="Requerimentos" usuario="👨‍🎓" />
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

export default Requerimentos;
