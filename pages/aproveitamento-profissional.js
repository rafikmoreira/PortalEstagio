import Glossario from "../Components/Glossario";
import PopoverDocumento from "../Components/PopoverDocumento";

const AproveitamentoProfissional = () => (
    <section className="container">
        <div className="row">
            <div className="col">
                <h1 className="mt-3">Aproveitamento Profissional</h1>
                <p className="mt-3">
                    Estudantes que já exerçam atividade profissional no período de estágio obrigatório, em entes públicos e privados, poderão aproveitar suas atividades profissionais para dispensar parcial ou total do estágio,
                    desde que atue na área do respectivo curso e sejam aprovadas as suas atividades pela Coordenação do Cursos e <Glossario>professor orientador</Glossario> de Estágio.
                </p>

                <h4>Procedimento</h4>
                <p>O aluno deve proceder com a matrícula entregando a <PopoverDocumento chaveDocumento={"ficha-matricula"}>Ficha de Mátricula</PopoverDocumento> na secretária e entregando o <PopoverDocumento chaveDocumento={"aproveitamento-profissional"}>Requirimento de Aproveitamento Profissional</PopoverDocumento> no núclo de estágio, juntamente com a <Glossario>Declaração do empregador sobre atividades exercidas pelo profissional</Glossario>.</p>
                <p>Além disso, também devem ser apresentandos os documentos abaixo:</p>
            </div>
            <div className="col-sm-4 col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid" src="images/aproveitamento.svg"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">


                <h5>Se Funcionário de Empresa Privada</h5>
                <ul>
                    <li>Carteira de Trabalho e Previdência Social – CTPS (cópias das folhas que contêm a foto, a qualificação civil e a folha do registro de trabalho)</li>
                </ul>


                <h5>Se Servidor Público</h5>
                <ul>
                    <li>Carteira de Trabalho e Previdência Social – CTPS (cópias das folhas que contém a foto, a qualificação civil e a folha do registro de trabalho), apenas para celetista</li>
                    <li>Portaria ou Ato de Nomeação.</li>
                </ul>

                <h5>Se Autônomo</h5>
                <ul>
                    <li>Comprovante de registro na prefeitura municipal;</li>
                    <li>Comprovante de recolhimento do Imposto Sobre Serviço;</li>
                    <li>Carnê de contribuição ao INSS;</li>
                    <li>Contrato de prestação de serviços e Nota(s) Fiscal(is);</li>
                </ul>

                <h5>Se Empresário/Sócio</h5>
                <ul>
                    <li>Contrato Social da Empresa;</li>
                    <li>Cartão CNPJ;</li>
                    <li>Comprovante de registro na prefeitura municipal;</li>
                    <li>Comprovante de recolhimento do Imposto sobre Serviço;</li>
                    <li>Carnê de contribuição ao INSS;</li>
                    <li>Contrato de prestação de serviços e Nota(s) Fiscal(is);</li>
                </ul>

                <p>O seu requerimento será avaliado pelo colegiado do seu curso, que devera emitir um parecer quanto ao aproveitamento e com a quantidade de horas que deverá ser aproveitada.</p>

            </div>
        </div>
    </section>
)

export default AproveitamentoProfissional
