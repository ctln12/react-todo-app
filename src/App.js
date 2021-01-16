import './App.css';
import React, { Component } from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { todos: [] };
    this.createTodo = this.createTodo.bind(this);
  }
  createTodo(newTodo){
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>React Todo App</h1>
        <NewTodoForm addTodo={this.createTodo} />
        <div>
          {this.state.todos.map(todo => <Todo todo={todo} />)}
        </div>
      </div>
    );
  }
}

export default App;
