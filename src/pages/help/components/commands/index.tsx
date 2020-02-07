import React from 'react';
import { Form, Table, Row } from 'react-bootstrap';
import CommandsData from './commands.json';
import './style.scss';

class Commands extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div id="commands">
        <h2>Comandos</h2>
        <div className="pt-2">
          <Form.Control type="text" placeholder="Pesquisar..." />
          <div className="content">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Comando</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {CommandsData.map((command, index) => (
                  <tr key={index}>
                    <td>{command.category}</td>
                    <td>{command.command}</td>
                    <td>{command.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Commands;
