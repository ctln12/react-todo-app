import React, { Component } from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = { todos: [] };
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  createTodo(newTodo){
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  deleteTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  render() {
    return (
      <div className="TodoList">
        <NewTodoForm addTodo={this.createTodo} />
        <div>
          {this.state.todos.map(todo => (
            <Todo key={todo.id} id={todo.id} content={todo.content} removeTodo={this.deleteTodo} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
