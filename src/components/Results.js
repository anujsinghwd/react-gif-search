import React, { Component } from 'react';
import Resultsrow from './Resultsrow';

class Results extends Component{
    render(){
      let gifsData = this.props.gifData;
        return(
          <div className="component-emoji-results">
            {
              gifsData.map((res, i) => {
                return res.media.map((item, j) => {
                  return <Resultsrow key={j}
                      url={item.tinygif.url}
                      title={res.itemurl}
                      preview={item.tinygif.preview}
                   />;
                })
              })
            }
          </div>
        );
    }
  }

  export default Results;