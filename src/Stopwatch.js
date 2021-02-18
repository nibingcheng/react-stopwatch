import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0,
      timerId: null
    }
  }
    
  handleStart=()=> {
    this.setState({
      timerId: setInterval(this.increaseCounter, 1000)
    })
  }
  
  increaseCounter=()=> {
    this.setState ({
          counter: this.state.counter + 1
    })
    // console.log("hello", this.state.counter);
  }

  handlePause=()=> {
    clearInterval(this.state.timerId);
  }

  handleReset=()=> {
    this.setState ({
      counter: 0
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
