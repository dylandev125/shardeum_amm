import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/HeaderDrawer/index";
import HomePage from "./Pages";
import Farm from "./Pages/Farms/index";
import Pools from './Pages/Pools/index'
import MyStake from "./Pages/MyStake";

function App() {
  return (
    <div className="App">
    
        <Router>
        <Header>
          <Route path="/" component={HomePage} exact/>
          <Route path="/farm" component={Farm} exact/>
          <Route path="/pools" component={Pools} exact/>
          <Route path="/mystake" component={MyStake} exact/>
          
          </Header>
        </Router>
      
    </div>
  );
}

export default App;
