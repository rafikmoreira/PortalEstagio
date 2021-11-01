const TabelaCargaHoraria = () => (
    <div>
        <h3>Cursos de Graduação</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope={"col"}>Curso</th>
                    <th  scope={"col"}>Carga Horária</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="https://ifnmg.edu.br/cursos/250-portal/almenara/almenara-cursos-superiores/15026-bacharelado-em-agronomia">Bacharelado em Engenharia Agronômica <i className={"fas fa-external-link-alt"}></i></a></td>
                    <td>300h</td>
                </tr>
                <tr>
                    <td><a href="https://ifnmg.edu.br/cursos/250-portal/almenara/almenara-cursos-superiores/15025-tecnologia-em-analise-e-desenvolvimento-de-sistemas-tads">Tecnologia em Análise e Desenvolvimento de  <i className={"fas fa-external-link-alt"}></i></a></td>
                    <td>200h</td>
                </tr>
                <tr>
                    <td><a href="https://ifnmg.edu.br/cursos/250-portal/almenara/almenara-cursos-superiores/15027-tecnologia-em-processos-gerenciais">Tecnologia em Processos Gerenciais <i className={"fas fa-external-link-alt"}></i></a></td>
                    <td>360h</td>
                </tr>
            </tbody>
        </table>
        <h3>Crusos Técnicos</h3>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Curso</th>
                <th>Carga Horária</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="https://ifnmg.edu.br/cursos-alm/cursos-tecnicos-alm?layout=edit&id=21469">Técnico em Administração <i className={"fas fa-external-link-alt"}></i></a></td>
                    <td>100h</td>
                </tr>
                <tr>
                    <td><a href="https://ifnmg.edu.br/cursos-alm/cursos-tecnicos-alm?layout=edit&id=1281">Técnico em Agropecuária <i className={"fas fa-external-link-alt"}></i></a></td>
                    <td>150h</td>
                </tr>
                <tr>
                    <td><a href="https://ifnmg.edu.br/cursos-alm/cursos-tecnicos-alm?layout=edit&id=1285">Técnico em Enfermagem <i className={"fas fa-external-link-alt"}></i></a></td>
                    <td>720h</td>
                </tr>
                <tr>
                    <td><a href="https://ifnmg.edu.br/cursos-alm/cursos-tecnicos-alm?layout=edit&id=1283">Técnico em Informática <i className={"fas fa-external-link-alt"}></i></a></td>
                    <td>200h</td>
                </tr>
                <tr>
                    <td><a href="https://ifnmg.edu.br/cursos-alm/cursos-tecnicos-alm?layout=edit&id=3233">Técnico em Zootecnia <i className={"fas fa-external-link-alt"}></i></a></td>
                    <td>160h</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default TabelaCargaHoraria
