import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushi: []
    }
    this.getSushi()
  }

  

  getSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(newSushi => this.setState({sushi: newSushi}))
  }

  render() {
    return (
      <div className="app">
        {/* SushiContainer needs props */}
        <SushiContainer getSushi={this.state.sushi.slice(0,4)}/>
        {/* Table needs props */}
        <Table plates={this.state.sushi.slice(0,4)}/>
      </div>
    );
  }
}

export default App;