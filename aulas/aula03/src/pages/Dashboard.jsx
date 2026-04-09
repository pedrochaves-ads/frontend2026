import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";


function Dashboard() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar titulo="Olá Aluno" />
        <h2>Bem-vindo ao portal do aluno</h2>
        <section>
          <Card titulo="Mural de Avisos" />
          <Card titulo="Calendário Acadêmico" />
          <Card titulo="Minhas Disciplinas" />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
