import React from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
import ValueContextProvider from './ValueContext';

class App extends React.Component {
  render() {
    console.log('app da render');
    return (
      <div className="app">
        <ValueContextProvider>
          <Form />
          <Result />
        </ValueContextProvider>
      </div>
    );
  }
}

export default App;
