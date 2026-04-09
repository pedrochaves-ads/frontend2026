import './requerimentos.css';
import Sidebar from '../components/sidebar';
import Menu from '../components/menu';
import Topbar from '../components/topbar';
import Card from '../components/card';

function Requerimentos() {
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
            <thead>
              <tr>
                <th>Tipo de Requerimento</th>
                <th>Data de Solicitação</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revisão de Menção</td>
                <td>15/12/2025</td>
                <td className="indeferido">Indeferido</td>
              </tr>
              <tr>
                <td>Dispensa de Disciplina</td>
                <td>12/06/2025</td>
                <td className="indeferido">Indeferido</td>
              </tr>
              <tr>
                <td>Trancamento de Matrícula</td>
                <td>05/01/2024</td>
                <td className="deferido">Deferido</td>
              </tr>
              <tr>
                <td>Mudança de Turno</td>
                <td>10/10/2023</td>
                <td className="deferido">Deferido</td>
              </tr>
              <tr>
                <td>Renovação de Matrícula</td>
                <td>20/02/2023</td>
                <td className="deferido">Deferido</td>
              </tr>
            </tbody>
          </table>
        </main>
      </section>
    </main>
  );
}

export default Requerimentos;
