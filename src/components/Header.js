import React, { Component } from 'react';

class Header extends Component{
    render(){
      return(
        <header className="component-header">
          <img
            src="https://datajar.io/static/images/loading2.gif"
            width="32"
            height="32"
            alt=""
          />
          GIFs Search
          <img
            src="https://datajar.io/static/images/loading2.gif"
            width="32"
            height="32"
            alt=""
          />
        </header>
      );
    }
  }

export default Header;