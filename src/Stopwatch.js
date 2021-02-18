import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }
    
  handleStart=()=> {
    setInterval(this.increaseCounter, 1000);
  }
  
  increaseCounter=()=> {
    this.setState ({
          counter: this.state.counter + 1
    })
    // this.state.counter++;
    console.log("hello", this.state.counter);
  }
  
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
