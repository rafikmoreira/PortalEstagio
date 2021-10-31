import Hero from "../Components/Hero";
import {AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion} from "reactstrap";

let perguntas = [
    {
        pergunta: 'Qual é a carga horária que devo cumprir no meu estágio obrigatório?',
        resposta: ''
    },
    {
        pergunta: 'O que é o estágio não obrigatório?',
        resposta: ''
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
                        Estágio é ato educativo escolar supervisionado, desenvolvido no ambiente de trabalho, que visa à
                        preparação para o trabalho produtivo de educandos que estejam frequentando o ensino regular em
                        instituições de educação superior, de educação profissional, de ensino médio, da educação
                        especial e dos anos finais do ensino fundamental, na modalidade profissional da educação de
                        jovens e adultos. Ademais:
                    </p>
                    <ul>
                        <li>O estágio faz parte do projeto pedagógico do curso, além de integrar o itinerário formativo
                            do educando.
                        </li>
                        <li>O estágio visa ao aprendizado de competências próprias da atividade profissional e à
                            contextualização curricular, objetivando o desenvolvimento do educando para a vida cidadã e
                            para o trabalho.
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <img src="images/o_estagio.svg"/>
                </div>
            </div>
        </section>

        <section className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="images/perguntas.svg"/>
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
                                                {pergunta.pergunta}
                                            </AccordionHeader>
                                            <AccordionBody  accordionId={`pergunta- ${index}`}>
                                                Teste
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
