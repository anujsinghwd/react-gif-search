import React, { Component } from 'react';

class Resultsrow extends Component{
    render(){
      console.log(this.props);
      return(
          <div
          className="component-gifs-result-row copy-to-clipboard"
           data-clipboard-text={this.props.url} 
            >
            <img src={this.props.url} />
            <span className="title">{this.props.title}</span>
            <span className="info">Click to copy emoji</span>
        </div>
      );
    }
  }

  export default Resultsrow;