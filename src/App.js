import React from 'react';
import Home from './components/Home'
import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='' component={Home}></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
