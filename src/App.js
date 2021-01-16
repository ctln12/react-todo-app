import './App.css';
import React, { Component } from 'react';
import Todo from "./Todo";

class App extends Component {
  render() {
    const content = "Do flashcards!";
    return (
      <div className="App">
        <h1>React Todo App</h1>
        <Todo content={content} />
      </div>
    );
  }
}

export default App;
