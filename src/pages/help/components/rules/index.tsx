import React from 'react';
import './style.scss';
import RulesData from './rules.json';

class Rules extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div id="rules">
        <h2>Regras</h2>
        <div className="pt-2 content">
          <ol>
            {RulesData.map((rule, index) => (
              <li key={index}>
                {rule.rule}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Rules;
