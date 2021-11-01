import Hero from "../Components/Hero";
import {AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion} from "reactstrap";
import PopoverDocumento from "../Components/PopoverDocumento";
import Glossario from "../Components/Glossario";
import TabelaCargaHoraria from "../Components/TabelaCargaHoraria";

let perguntas = [
    {
        pergunta: 'Qual é a carga horária que devo cumprir no meu estágio obrigatório?',
        resposta: '<p>Cada curso determina a carga horária do estágio obrigatório em seu projeto pedagógico.</p>\n<p>Acesse a área de <a href="/cursos">Cursos <i class="fas fa-external-link-alt"></i></a> para obter mais detalhes.</p>\n'
    },
    {
        pergunta: 'Onde posso encontrar uma empresa para estagiar?',
        resposta: ''
    },
    {
        pergunta: 'Quais são meus direitos e deveres como estagiário?',
        resposta: ''
    },
    {
        pergunta: 'Como devo proceder para iniciar o meu estágio?',
        resposta: ''
    },
    {
        pergunta: 'Quais os passos finais para finalizar o meu estágio?',
        resposta: ''
    }
]

const Home = () => (
    <div>
        <section>
            <Hero/>
        </section>
        <section className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="mt-3">O Estágio</h1>
                    <p className="mt-3">
                        O estágio supervisionado é o momento em que os estudantes podem aplicar os conhecumentos adiquiridos durante o curso
                        em situações práticas e com acompanhamento de profissionais qualidicados que já atuam em suas respectivas áreas. O estágio é
                        regulamentado pela <Glossario>Lei do Estágio (Lei Nº11.788)</Glossario>, o projeto pedagógico de cada curso define as atividades quem pode ser
                        exercidas pelo estudante durante esse período, são dividos em duas modalidaes:
                    </p>
                    <ul>
                        <li><strong>Estágio Obrigatório:</strong> é um requisitos para a conclusão do curso.
                            O projeto pedagógico de cada curso define a carga horária necessária, bem como, critérios para aproveitameto de outroas atividades. Não é necessário o pagamento de benéficio ao estágiario, como bolsa ou auxilio transporte.</li>

                        <li><strong>Estágio Não Obrigatório:</strong> não tem caracter obrigatório, pode ser feito a interesse do estudante.
                            Nessa modalidade, é obrigatório o pagamento de bolsa para o estudante e auxílio transporte quado necessário. O estudante poderá estagiar em uma mesma instituições por no máximo 2 anos. De acordo com o projeto pedagógico de cada curso, parte da carga horária pode ser aproveitada como atividade complementar.</li>
                    </ul>
                    <h4>Jornada</h4>
                    <p>O horário da realização do estágio deve ser compativel com o horário escolar e deve seguir os seguintes critérios máximos:</p>
                    <ul>
                        <li><strong>4 horas diárias (20 semanais)</strong> para estudantes de Educação Especial ou Educação de Jovens e Adultos</li>
                        <li><strong>6 horas diárias (30 semanais)</strong> para estudantes do Ensino Superior, Educação Profissional de nível médio e Ensino Médio regular</li>
                        <li><strong>8 horas diárias (40 semanais)</strong> para estágios de cursos que dividem o tempo entre teoria e prática, desde que não estejam no período de aulas presenciais e que a atividade esteja presente no projeto do curso e da instituição de ensino</li>
                    </ul>
                    <p>Você pode conferir mais informações no <Glossario>Regulamento de Estágio</Glossario> e ná <Glossario>Lei do Estágio (Lei Nº11.788)</Glossario>.</p>

                </div>
                <div className="col-md-4">
                    <img className={"img-fluid"} src="images/o_estagio.svg"/>
                </div>
            </div>
        </section>
        <section className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className={"img-fluid"} src="images/perguntas.svg"/>
                </div>
                <div className="col-md-8">
                    <h1 className="mt-3">Perguntas Frequentes</h1>
                    <div className="row">
                        <div className="row">
                            <UncontrolledAccordion flush  >
                                {
                                    perguntas.map((pergunta, index) => (
                                        <AccordionItem key={index}>
                                            <AccordionHeader targetId={`pergunta- ${index}`}>
                                                <strong>{pergunta.pergunta}</strong>
                                            </AccordionHeader>
                                            <AccordionBody  accordionId={`pergunta- ${index}`}>
                                                <div dangerouslySetInnerHTML={ {__html: pergunta.resposta} } />
                                            </AccordionBody>
                                        </AccordionItem>
                                    ))
                                }
                            </UncontrolledAccordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Home
