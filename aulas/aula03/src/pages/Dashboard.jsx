import Card from "../components/Card";
import Layout from "./Layout"; 


function Dashboard() {
  return (
      <Layout titulo="Olá Aluno" subtitulo="Bem-vindo ao portal do aluno">
          <Card titulo="Mural de Avisos" />
          <Card titulo="Calendário Acadêmico" />
          <Card titulo="Minhas Disciplinas" />
      </Layout>
  )
}

export default Dashboard;
