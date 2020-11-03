import React from 'react';
import { ValueContext } from './ValueContext';

class Result extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    console.log('result da render');
    return (
      <ValueContext.Consumer>
        {(context) => <h1>{context.value}</h1>}
      </ValueContext.Consumer>
    );
  }
}

export default Result;
