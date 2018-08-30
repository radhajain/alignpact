import React, { Component } from "react";
import logo from "./Assets/Logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="blurBlock">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">AlignPact</h1>
            <p
              style={{
                color: "white",
                fontFamily: "Lato",
                fontWeight: "light",
                display: "inline"
              }}
            >
              info@alignpact.com
            </p>
            <p
              style={{
                color: "white",
                fontFamily: "Lato",
                fontWeight: "light",
                display: "inline",
                marginLeft: 30,
                marginRight: 30
              }}
            >
              |
            </p>
            <p
              style={{
                color: "white",
                fontFamily: "Lato",
                fontWeight: "light",
                display: "inline"
              }}
            >
              650.279.8200
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
