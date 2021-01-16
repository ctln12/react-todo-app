import './App.css';
import React, { Component } from 'react';
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Todo App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
