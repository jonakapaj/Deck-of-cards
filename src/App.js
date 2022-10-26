import React, { Component } from "react";
import Deck from "./Deck";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Deck />
      </div>
    );
  }
}

export default App;
