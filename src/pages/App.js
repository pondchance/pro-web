import React, { Component } from 'react';
import Footer from '../Component/footer'
import Header from '../Component/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">


       <Header />
      <p>pond</p>
      <button><a href="/">Back</a></button>
      <Footer />
      </div>
    );
  }
}

export default App;
