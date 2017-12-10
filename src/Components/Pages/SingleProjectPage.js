import React, { Component } from 'react';

class SingleProjectPage extends Component {
  render() {

	const title = this.props.title;

    console.log(this.props.projects);
    const detailedProjects = this.props.projects.filter(project => {
        if(project.title == title) {
            return(project);

        }
    });

    return(
    	 <ul>
    	 {detailedProjects.map((project) => {
          return <li key={project.id} className="project-card__container">
            <div> {project.title}</div>
             <div> {project.description}</div>
          </li>
        })}
        </ul>

    );
  }
}

export default SingleProjectPage;