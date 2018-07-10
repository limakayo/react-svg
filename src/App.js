import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <svg className="svg-clip">
            <defs>
              <clipPath id="golaPath">
                <title>My Clip Path</title>
                <path d="M215,100.3c97.8-32.6,90.5-71.9,336-77.6
          c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1
          c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z"/>
              </clipPath>
            </defs>
          </svg>
          <img style={{ clipPath: "url(#golaPath)" }} src="http://78.media.tumblr.com/tumblr_m5nre6cxkQ1qbs7p5o1_r1_500.jpg" alt="" />

          <svg className="svg-clip">
            <defs>
              <clipPath id="saiaPath">
                <title>My Clip Path</title>
                <polygon points="273.58 1 118.58 1 1.58 248 392.58 248 273.58 1" />
              </clipPath>
            </defs>
          </svg>
          <img style={{ clipPath: "url(#saiaPath)" }} src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
        </div>
      </div>
    );
  }
}

export default App;
