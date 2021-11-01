import TabelaCargaHoraria from "../Components/TabelaCargaHoraria";

const Cursos = () => (
    <section className="container">
        <div className="row">
            <div className="col">
                <h1 className="mt-3">Carga horária por curso</h1>
                <p className="mt-3">
                    Cada um dos cursos oferecidos pelo IFNMG-Almenara tem a sua carga horária de estágio definida em seus projetos pedagógicos.
                    Clique no curso desejado para acessar a página do respectivo curso e ter acesso ao seu Projeto Pedagógico.
                </p>
            </div>
            <div className="col-4 col-lg-3 d-flex align-bottom">
                <img className="img-fluid" src="images/ch.svg"/>
            </div>
        </div>
        <div className="row">
            <TabelaCargaHoraria/>
        </div>
    </section>
)

export default Cursos
