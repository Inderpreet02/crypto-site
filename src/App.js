import React from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cryptos from './components/Cryptos';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/crypto/:coinId">
            <CryptoDetails/>
          </Route>
          <Route path="/cryptos">
            <Cryptos count={100}/>
          </Route>
          <Route path="/">
          <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
