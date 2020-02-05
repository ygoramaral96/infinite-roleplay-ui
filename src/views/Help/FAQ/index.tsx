import React from 'react';

import './styles.scss';
import { Container, Accordion, Icon } from 'semantic-ui-react';

class FAQ extends React.Component {
  state = { activeIndex: 0 };

  componentDidMount() {}

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const faqContent = [
      {
        id: 0,
        question: 'O projeto já possui um nome?',
        answer: 'Sim, nosso servidor foi nomeado através de uma votação como Infinite Roleplay.',
      },
      {
        id: 1,
        question: 'O servidor fará parte do Advanced Roleplay?',
        answer: 'Apesar de parceiros, somos um projeto independente.',
      },
      {
        id: 2,
        question: 'O servidor já encontra-se ativo?',
        answer: 'Não, nosso servidor ainda está em desenvolvimento, sem previsão de lançamento ou ativação.',
      },
      {
        id: 3,
        question: 'Qual plataforma usaremos?',
        answer: 'Nós usaremos o RAGE:MP até o presente momento.',
      },
      {
        id: 4,
        question: 'Onde posso acompanhar as novidades? Existe um fórum?',
        answer: 'https://www.forum.infiniteroleplay.com.br/',
      },
      {
        id: 5,
        question: 'A equipe administrativa já foi formada? Como faço parte?',
        answer: 'Não temos nenhum tipo de aplicação formal no momento. Até então, os membros integrantes foram convidados.',
      },
      {
        id: 6,
        question: 'Posso fazer parte de alguma sub-equipe? Quais?',
        answer: 'Estamos aceitando interessados nas equipes de design e mapping. Confira nos #📢anúncios',
      },
      {
        id: 7,
        question: 'O Servidor terá MODs como no MTA?',
        answer: 'Apesar de ser possível colocar mods na raiz do servidor e este mod ser baixado automaticamente por todos os players, pretendemos deixar o servidor o mais limpo possível. O que vamos colocar de diferente são alguns Mapas, interiores de casas e empresas.',
      },
      {
        id: 8,
        question: 'Possui data de Lançamento?',
        answer: 'Ainda não definimos nenhuma data. Estamos trabalhando no desenvolvimento essencial, para depois lançarmos o BETA para os players testarem a funcionalidade e encontrarem erros / bugs para corrigirmos antes do lançamento.',
      },
      {
        id: 9,
        question: 'O servidor vai se passar por toda LS ou em alguma parte específica?',
        answer: 'Todo o mapa do servidor será liberado. Não haverá nenhuma restrição ou limitação. O que faremos para proporcionar uma melhor jogabilidade no início é definir um "centro" dos RPs. Lugar onde terá acesso à banco, lojas, casas, estabelecimentos e etc. Onde os players vão se encontrar mais facilmente.\n\n Atualmente escolhemos o bairro na região de Strawberry (proximidades da boate Vanilla Unicorn)',
      },
      {
        id: 10,
        question: 'Todos os veículos e armas serão disponibilizados?',
        answer: 'Iremos estudar melhor toda essa parte. Mas pretendemos deixar o mais variado possível. Claro, iremos deixar indisponíveis carros fora da realidade (que voam, por exemplo) e armas que não irão agregar no Roleplay do servidor. Tudo será definido com muito senso e planejamento.',
      },
      {
        id: 11,
        question: 'O Servidor será por VOZ?',
        answer: 'Não. Todo desenvolvimento e roleplay será por texto.',
      },
    ];

    return (
      <Container>
        <div id="faq">
          <h2>Frequently Asked Questions</h2>
          <div>
            <Accordion>
              {faqContent.map((content, index) => (
                <div key={index} id={content.id.toString()}>
                  <Accordion.Title
                    active={activeIndex === content.id}
                    index={content.id}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    {content.question}
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === content.id}>
                    {content.answer}
                  </Accordion.Content>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    );
  }
}

export default FAQ;
