import React, { Component } from 'react';
import Tag from '../Shared/Tag';

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
          return <li key={project.id} className="singleProject__container">
            <div className="singleProject__image">
              <img src={project.img} alt="project overview image"/>
            </div>
            <div className="singleProject__wrapper">
              <div className="singleProject__title">
                <h1>{project.title}</h1>
              </div>
                <a className="singleProject__url" href="{project.url}">{project.url}</a>
              <div className="singleProject__overview">
                <h5>{project.overview}</h5>
              </div>
              <ul className="project-card__taglist singleProject__taglist">
                {project.tags.map((tag) => {
                  return <li key={tag}>
                    <Tag
                      tags={tag}>
                      {tag}
                    </Tag>
                  </li>
                })}
              </ul>
              <div className="singleProject__features__wrapper">
                <div>Feature</div>
              </div>
            </div>
          </li>
        })}
        </ul>

    );
  }
}

export default SingleProjectPage;