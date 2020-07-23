import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Header from './Header';
import Form from './Form';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/add" component={Form}></Route>
        </Switch>
      </Router>
      {/* <Home></Home> */}
      {/* <Form></Form> */}
    </div>
  );
}

export default App;
