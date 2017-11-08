import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
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

class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/" component={(props) => <ProjectPage
            projects={this.props.projects}
            value={this.props.value}
          >{props.children}</ProjectPage>}/>
        </Switch>
      </main>
    );
  }
}

class Home extends Component {
  render() {
    return(
      <header>
        <div>Home</div>
      </header>
    );
  }
}

class ProjectPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "Select an Option",
    };
  }

  applyFilter(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return(
      <div>
        <div className="dashboard--wrapper"> 
            <div className="header__tout__wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaIxxoTK2awC70sFisZLDSjghjjpFHot5w-Gm6OWfogp9UKnI"/>
            </div>
            <Filter
              projects={this.props.projects}
              onChange={this.applyFilter.bind(this)}
              value={this.state.value}
            />
            <ProjectDashboard
              projects={this.props.projects}
              value={this.state.value}
            />
        </div>
      </div>
    );
  }
}

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allTags = ["Select an Option"];
    
    function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
    }

    this.props.projects.map((project) => {
      for (let tag of project.tags) {
        allTags.push(tag)
      }
    });

    const uniqueTags = allTags.filter(onlyUnique);
    
    const options = uniqueTags.map((tags) => {
      return tags;
    });

    return(
      <div className={this.props.id}>
      <label> Filter By: </label>
        <select value={this.props.value} onChange={this.props.onChange} className="form-control" >
          {options.map(option => {      
            return <option value={option} key={option}>{option}</option>
          })}
        </select>
      </div>
    );
  }
}

class Tag extends Component {
  render() {
    return (
      <div className="tag">
        <a className="link--secondary" >{this.props.tags}</a>
      </div>
    );
  }
}

class ProjectDashboard extends Component {
  render() {
    return(
     <div className="dashboard">
      <div className="project__wrapper">
        <ProjectList
          projects={this.props.projects}
          value={this.props.value}
        />
      </div>  
      </div>  
    );
  }
}

class ProjectList extends Component {
  render() {
    let filteredProjects = this.props.projects.filter(
      (project) => {
        return project.tags.indexOf(this.props.value) !== -1;
      }
    );

    return(
      <ul>
        {filteredProjects.map((project) => {
          return <li key={project.id} className="project-card__container">
            <ProjectCard
              value={this.props.value}
              project={project}
            />
          </li>
        })}
      </ul>
    )
  }
}

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card">
        <div className="project-card__image">
          <img src={this.props.project.img} className="project-image"/>
        </div>
        <div className="project-card__details">
          <a href={this.props.project.url} className="project-card__title">
            {this.props.project.title}
          </a>
          <ul className="project-card__taglist">
            {this.props.project.tags.map((tag) => {
              return <li key={tag}>
                <Tag
                  tags={tag}>
                  {tag}
                </Tag>
              </li>
            })}
          </ul>
          <p className="project-description">{this.props.project.description}</p>
        </div>
      </div>
    );
  }
}
export default App;