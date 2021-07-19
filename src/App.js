import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import BirthDayPage from "./components/BirthDayPage";
import ScratchOff from "./components/ScratchOff";
import { createBrowserHistory } from "history";
import Routes from './routes';

const hist = createBrowserHistory();

//const BirthDayPage = React.lazy(() => import('./components/BirthDayPage'));


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap" history={hist}>
      <HashRouter >
        <Route exact path="/" component={Login} />
        <Route exact path="/BirthDayPage" component={BirthDayPage}/>
        <Route exact path="/ScratchOff" component={ScratchOff}/>
      </HashRouter>
      </div>
    </div>
  );
}

export default App;
