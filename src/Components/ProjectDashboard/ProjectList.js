import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class ProjectList extends Component {
  render() {
    let filteredProjects = this.props.projects.filter(
      (project) => {
        if (this.props.value == 'Show All Projects') {
          return project.tags;
        }
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

export default ProjectList;