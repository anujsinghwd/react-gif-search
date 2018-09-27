import React, { Component } from 'react';
import Results from './Results';

class Searchbar extends Component{
  
    constructor(props){
      super();
      
      this.state = {
        gifs: []
      };
    }
    
    handleChange(event){
      this.getGifs(event.target.value);
     }
    
    getGifs(value){
      let finalURL = `https://api.tenor.com/v1/search?q=${value}&key=LIVDSRZULELA&limit=8&anon_id=3a76e56901d740da9e59ffb22b988242`;
      fetch(finalURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
           this.setState({gifs: data.results});
        })
       .catch((error) => console.log('There was a problem in fetching data'));
    }
    
    componentDidMount(){
      this.getGifs('happy');
    }
    
    render(){
      
      return(
        <div>
          <div className="component-search-input">
            <div>
              <input placeholder="eg: happy;sad;angry" onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <Results gifData={this.state.gifs} />
        </div>
      );
    }
  }

  export default Searchbar;