import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import ProjectDashboard from './Components/ProjectDashboard/ProjectDashboard';
import Portfolio from './Components/Pages/Portfolio';
import Home from './Components/Pages/Home';
import Header from './Components/Shared/Header';
import './styles/styles.css';


class App extends Component {
   constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Main
          projects={this.props.projects}
        />
      </div>
    );
  }
}


class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/" component={(props) => <Portfolio
            projects={this.props.projects}
            value={this.props.value}
          >{props.children}</Portfolio>}/>
        </Switch>
      </main>
    );
  }
}

export default App;