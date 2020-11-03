import React from 'react';
import { ValueContext } from './ValueContext';

class Form extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  updateValue = (e, context) => {
    context.updateValue(e.target.value);
  };

  render() {
    console.log('form da render');
    return (
      <div className="form">
        <ValueContext.Consumer>
          {(context) => (
            <input type="text" onKeyUp={(e) => this.updateValue(e, context)} />
          )}
        </ValueContext.Consumer>
      </div>
    );
  }
}

export default Form;
