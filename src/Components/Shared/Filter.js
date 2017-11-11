import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allTags = ["Show All Projects"];
    
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
      <div className="custom-input custom-input--select">
        <select value={this.props.value} onChange={this.props.onChange} className="form-control" >
          {options.map(option => {      
            return <option value={option} key={option}>{option}</option>
          })}
        </select>
      </div>
    );
  }
}

export default Filter;