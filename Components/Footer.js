import styles from './Footer.module.scss'

const Footer = ()=> (
    <footer className={`footer mt-auto py-3 ${styles.footer}`}>
        <div className="container">
            <div className="row">
                <div className="col">
        <span>Rodovia BR 367 Almenara/Jequitinhonha, km 111, Zona Rural, Almenara - MG - CEP:39900-000 <br/>
            Fone: (038) 3218-7385 - Email: <a href={"mailto:estagio.almenara@ifnmg.edu.br"}>estagio.almenara@ifnmg.edu.br</a></span>
                </div>
            </div>
        </div>
    </footer>

)
export default Footer
