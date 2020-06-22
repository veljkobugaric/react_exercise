import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters'


class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <Header name={10} />
        <Characters />
      </div>
    );
  }
}

export default App;
