import React, { Component } from 'react';
//import Footer from '../Component/footer'
import Header from '../Component/header/header'
class Test extends Component {
  render() {
    return (
      <div className="Test">
          <Header/>
       <p>Main Page</p>   
      <button><a href="/App">App</a></button>
  
      </div>
    );
  }
}

export default Test;
