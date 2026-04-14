import './boletos.css';
import Sidebar from '../components/sidebar';
import Menu from '../components/menu';
import Topbar from '../components/topbar';
import Card from '../components/card';


const cards = [
  {
    titulo: 'Pagamentos Recentes',
    items: ['19/01/2026 - Pago', '19/02/2026 - Em atraso'],
  },
  {
    titulo: 'Próximas Vencimentos',
    items: ['19/03/2026 - A pagar', '19/04/2026 - A pagar'],
  },
  {
    titulo: 'Resumo Financeiro',
    items: ['Total previsto para 2026: R$ 6.000,00', 'Último pagamento: R$ 500,00'],
  },
];

function Boletos() {
  return (
    <section className="layout-app">
      <Sidebar logoText="Aluno Online">
        <Menu />
      </Sidebar>
      <main className="conteudo-principal">
        <Topbar titulo="Boletos" usuario="👨‍🎓" />
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
export default Boletos;
