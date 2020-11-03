import React, { Component, createContext } from 'react';

export const ValueContext = createContext();

class ValueContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Trống',
    };
  }

  updateValue = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    console.log('render provide');
    return (
      <ValueContext.Provider
        value={{ ...this.state, updateValue: this.updateValue }}
      >
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}

export default ValueContextProvider;
