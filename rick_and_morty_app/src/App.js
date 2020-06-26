import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import { InfoCard } from './components/InfoCard/InfoCard';
import { Switch, Route } from 'react-router';
import { Footer } from './components/Footer/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={Characters} />
          <Route exact path='/characters/:id' component={InfoCard} />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
