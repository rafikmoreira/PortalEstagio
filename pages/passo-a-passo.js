import {PopoverBody, UncontrolledPopover} from "reactstrap";
import Documento from "../Components/Documento";
import PopoverDocumento from "../Components/PopoverDocumento";
import Glossario from "../Components/Glossario";

const PassoAPasso = () => (
    <>
        <section className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-3">Passo a Passo</h1>
                    <p className="mt-3">
                        O processo para realização de estágio é composto por uma série de passos que devem ser seguidos
                        adequadamente para que ...
                    </p>
                </div>
                <div className="col-4 col-lg-3 d-flex align-bottom">
                    <img className="img-fluid" src="images/step.svg"/>
                </div>
            </div>
        </section>

        <section className="container">
            <div className="row">
                <div className="col">
                    <h4 className="mt-3">1º Passo - Matrícula</h4>
                    <p className="mt-3">
                        A matrícula é o ponto de partida do seu estágio, para isso você deve preencher a <PopoverDocumento chaveDocumento="ficha-matricula">ficha de matricula</PopoverDocumento> e entrega-la na secretária.
                        A secretaria irá avaliar a sua matrícula de estágio de encaminhará o para o núcleo de estágio.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="mt-3">2º Passo - Encontrar local para estagiar</h4>
                    <p className="mt-3">
                        Uma vez realizada a mátricula, você deverá procurar um local onde realizará o estágio. É de
                        sua resabilidade como aluno encontrar uma instituição privada, publica, ou um professional que aceite-o como estagiário(a).
                        Para ajuda-lo a encontrar um local, você pode consultar a lista de <Glossario>instituições convêniadas</Glossario>.
                        Você também é livre para entrar em contato com outras instituições e profissionais liberais na busca por um local para estagiar. Seu <Glossario>professor orientador</Glossario> pode preencher uma <PopoverDocumento chaveDocumento={"carta-apresentacao"}>carta de apresentação</PopoverDocumento> para que você possa se identificar junto aos possíveis locais.
                    </p>
                    <p>Caso a instituição ou profissional liberal não tenha um convênio ativo com o IFNMG-Almenara, o <Glossario>representante legal</Glossario> da
                        empresa ou o  <Glossario>profissional liberal</Glossario> deve preencher o <PopoverDocumento chaveDocumento={"termo-convenio"}>Termo de Convênio</PopoverDocumento> ou
                        a <PopoverDocumento chaveDocumento={"cadatro-profissional-liberal"}>Ficha de Cadastro de Profissional Liberal</PopoverDocumento> em duas vias, quem deveram ser encaminhadas ao núcleo de estágio por meio do aluno. O núcleo de estágio irá avaliar o documento, caso não haja problemas, uma das vias será entregue ao aluno para que devolva ao responsável.</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="mt-3">3º Passo - Termo de Compromisso e Plano de Estágio</h4>
                    <p className="mt-3">
                        O próximo passo é a celebração do <PopoverDocumento chaveDocumento={"termo-compromisso"}>Termo de Compromisso de Estágio</PopoverDocumento> e do <PopoverDocumento chaveDocumento={"plano-estagio"}>Plano de Estágio</PopoverDocumento>. O Termo de Compromisso é o documento que formaliza o acordo entre a Instituição Concedente do estágio, o IFNMG-Almenara e o Aluno (ou seus reponsáveis legais para os menores de 18 anos). No Termo de Compromisso de Estágio, além de identificadas as partes, deve constar o período em que o estágio será realizado, horários de inicio e fim das atividades, a carga horária total semana, as atividades que serão desenvolvidas e
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4 className="mt-3">4º Passo - Realizar o estágio</h4>
                    <p className="mt-3">

                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4 className="mt-3">5º Passo - Avaliações Finais e Relatórios</h4>
                    <p className="mt-3">

                    </p>
                </div>
            </div>
        </section>
    </>
)

export default PassoAPasso;
