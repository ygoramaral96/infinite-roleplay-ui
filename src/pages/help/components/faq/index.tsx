import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import './style.scss';
import FaqContent from './faq.json';

class FAQ extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="pt-2">
          <Accordion className="content">
            {FaqContent.map((content, index) => (
              <div key={index} id={content.id.toString()}>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={content.id}>
                      <FontAwesomeIcon icon={faCaretDown} />
                      {'\u00A0'}{content.question}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={content.id}>
                    <Card.Body>{content.answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    );
  }
}

export default FAQ;
