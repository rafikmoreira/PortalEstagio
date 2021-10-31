import Documento from "../Components/Documento";

export default function Documentos(){
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

        <section className="container">
            <div className="row">
                <div className="col-12">
                        <h1 className="mt-3 pb-3">Antes de Começar o Estágio</h1>
                </div>
            </div>
            <div className="row">
                <Documento
                    titulo={"Ficha de Mátricula"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec
                    </>}
                />
                <Documento
                    titulo={"Termo de Convênio"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec pulvinar mi vitae
                        metus tempor, vitae commodo mi sodales. Sed nec libero
                    </>}
                />
                <Documento
                    titulo={"Ficha de Cadastro de Profissional Liberal"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec
                    </>}
                />
                <Documento
                    titulo={"Termo de Compromisso"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec
                    </>}
                />
                <Documento
                    titulo={"Plano de Estágio"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec
                    </>}
                />

            </div>

        </section>

        <section className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="mt-3 pb-3">Durante o Estágio</h1>
                </div>
            </div>
            <div className="row">
                <Documento
                    titulo={"Folha de Frequência"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec
                    </>}
                />
                <Documento
                    titulo={"Formulário de Troca de Supervisor"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec pulvinar mi vitae
                        metus tempor, vitae commodo mi sodales. Sed nec libero
                    </>}
                />
            </div>

        </section>

        <section className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="mt-3 pb-3">Para finalizar o estágio</h1>
                </div>
            </div>
            <div className="row">
                <Documento
                    titulo={"Avaliação do Estágio (feita pela Entidade Concedente)"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec
                    </>}
                />
                <Documento
                    titulo={"Avaliação do Estágio (feita pelo Estagiário)"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec pulvinar mi vitae
                        metus tempor, vitae commodo mi sodales. Sed nec libero
                    </>}
                />
                <Documento
                    titulo={"Relatório final"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec
                    </>}
                />
            </div>
        </section>

        <section className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="mt-3 pb-3">Outros Documentos</h1>
                </div>
            </div>
            <div className="row">
                <Documento
                    titulo={"Formulário de Convalidação de Atividade Profissional"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec
                    </>}
                />
                <Documento
                    titulo={"Formulário de Convalidação de Horas de Ensino/Pesquisa/Extensão"}
                    descricao={<>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in vulputate lectus.
                        Cras eu congue nisi. Aenean maximus ut risus ut dignissim. Donec pulvinar mi vitae
                        metus tempor, vitae commodo mi sodales. Sed nec libero
                    </>}
                />
            </div>
        </section>
    </>
}
