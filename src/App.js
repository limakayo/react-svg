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
          {/*<svg className="clip-svg">
            <defs>
              <clipPath id="triangle-mask" clipPathUnits="objectBoundingBox">
                <polygon points="0 0.87, 0.5 0, 0.5 0, 1 0.87" />
              </clipPath>
            </defs>
          </svg>  
          <img className="triangle" src="https://source.unsplash.com/6SGax0BAxEI/400x300" alt=""/>*/}
          <svg className="clip-svg">
            <defs>
              <clipPath id="clipping">
                <polygon id="Star-1" points="98.4999978 153.75 38.2520165 185.424245 49.7583542 118.337123 1.01670635 70.8257603 68.3760155 61.037872 98.5000012 1.1379786e-14 128.624005 61.0378871 195.98331 70.8258091 147.241642 118.337136 158.747982 185.424247"/>
                <text x="0" y="3.2em">Text</text>
              </clipPath>
            </defs>
          </svg>
          <div className="item-clip">
            <img src="https://img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
