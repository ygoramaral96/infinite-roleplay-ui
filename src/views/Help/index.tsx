import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

import FAQ from './pages/faq/index';

type State = { currentPage: string };

export default class Help extends React.Component<State> {
  state: State;

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'Commands' // props.match != undefined ? props.match.params.page : 'Home',
    };
    this.HandlePage = this.HandlePage.bind(this);
    this.NavigatePage = this.NavigatePage.bind(this);
  }

  HandlePage() {
    switch (this.state.currentPage) {
      case 'Commands':
        return (<h2>Comandos</h2>);
      case 'FAQ':
        return (<FAQ />);
      case 'Rules':
        return (<h2>Regras</h2>);
      default:
        break;
    }
  }

  NavigatePage(page) {
    this.setState({
      currentPage: page
    });
  }

  IsActive(value) {
    return `categoryButton ${
      value === this.state.currentPage ? 'active' : 'inactive'
    }`;
  }

  render() {
    return (
      <Container className="helpPage glassBg">
        <Row className="header pt-2">
          <Col xs="11">
            <h1>Central de Ajuda</h1>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faTimes} className="exitButton" />
          </Col>
        </Row>

        <Row>
          <Col xs="4" className="divider-border-right">
            <Row className="px-4 pt-4">
              <button
                type="button"
                className={this.IsActive('Commands')}
                onClick={() => this.NavigatePage('Commands')}
              >
                Comandos
              </button>
              <button
                type="button"
                className={this.IsActive('FAQ')}
                onClick={() => this.NavigatePage('FAQ')}
              >
                F.A.Q.
              </button>
              <button
                type="button"
                className={this.IsActive('Rules')}
                onClick={() => this.NavigatePage('Rules')}
              >
                Regras
              </button>
            </Row>
          </Col>
          <Col className="divider-border-left">
            <Row className="px-5 pt-4">{this.HandlePage()}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
