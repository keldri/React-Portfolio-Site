import React, { Component } from 'react';
import Filter from '../Shared/Filter';
import ProjectDashboard from '../ProjectDashboard/ProjectDashboard';


class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "Show All Projects",
    };
  }

  applyFilter(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return(
      <div className="page__wrapper">
        <div className="header__tout__wrapper">
          <span>
            <h1>Work</h1>
            <h5>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</h5>
          </span>
            <Filter
            projects={this.props.projects}
            onChange={this.applyFilter.bind(this)}
            value={this.state.value}
          />
        </div>
        <div className="dashboard__wrapper wrapper">
          <ProjectDashboard
            projects={this.props.projects}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;