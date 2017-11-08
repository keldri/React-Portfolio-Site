import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Tag from '../Shared/Tag';

class ProjectCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="project-card">
        <Link to={`/projects/${this.props.project.title}`}>
        <div className="project-card__image">
          <img src={this.props.project.img} className="project-image"/>
        </div>
        </Link>
        <div className="project-card__details">
          <a href={this.props.project.url} className="project-card__title">
            {this.props.project.title}
          </a>
          <p className="project-description">{this.props.project.description}</p>
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
        </div>
      </div>
    );
  }
}

export default ProjectCard;