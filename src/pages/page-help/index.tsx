import React, { Component } from 'react';
import { Grid, Segment, Button, Icon, Divider } from 'semantic-ui-react';
import './index.scss';

// import { Container } from './styles';

export default class PageHelp extends Component {
  componentDidMount() {}

  render() {
    return (
      <Grid columns={3} className="helpPage glassBg" centered>
        <Grid.Row stretched className="header">
          <Grid.Column width={15}>
            <h1>Central de Ajuda</h1>
          </Grid.Column>
          <Grid.Column width={1} textAlign="right">
            <Button icon="close" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={5} stretched>
            <Grid.Row>
              <button type="button" className="categoryButton">Comandos</button>
              <Divider clearing />
              <button type="button" className="categoryButton">F.A.Q.</button>
              <Divider clearing />
              <button type="button" className="categoryButton">Regras</button>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={11}>
            <Grid.Row container>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
              <p>Teste</p>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
