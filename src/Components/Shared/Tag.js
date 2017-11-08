import React, { Component } from 'react';

class Tag extends Component {
  render() {
    return (
      <div className="tag">
        <span className="project-card__tag">{this.props.tags}</span>
      </div>
    );
  }
}

export default Tag;