import Documento from "../Components/Documento";
import documentos from "../data/documentos.json"

function Documentos({documentos}){
    return <>
        <section className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-3">Documentos</h1>
                    <p className="mt-3">
                        Recomendamos que preencha os documentos de inicio do estágio a partir do nosso site, mas caso
                        seja necessário o preenchimento manual você pode fazer donwload dos arquivos para imprimi-los
                        ou mesmo editar-los a partir de um editor de texto. Alguns documentos precisam ser entregues
                        antes do inicío do estágio e outros devem ser entregues ao fim do estágio.
                    </p>
                </div>
                <div className="col-4 col-lg-3 d-flex align-bottom">
                    <img className="img-fluid" src="images/documentos.svg"/>
                </div>
            </div>
        </section>

        {
            Object.keys(documentos).map(key => {
                const categoria = documentos[key];
                return (
                    <section className="container" key={key}>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mt-3 pb-3">{categoria.rotulo}</h1>
                            </div>
                            <div className="row">
                                {
                                    categoria.documentos.map((documento, index) => (
                                        <Documento key={documento.key}
                                            titulo={documento.titulo}
                                            descricao={documento.descricao}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                )
            })
        }
    </>
}

export async function getStaticProps(context) {
    return {
        props: {
            documentos
        },
    }
}

export default Documentos
