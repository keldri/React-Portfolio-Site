
import React, { Component } from 'react';
import ProjectList from './ProjectList';

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

export default ProjectDashboard;