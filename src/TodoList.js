import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = { todos: [{ content: "Do laundry", id: uuidv4(), completed: false }, { content: "Do homework", id: uuidv4(), completed: false }, { content: "Do yoga", id: uuidv4(), completed: false }] };
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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
  editTodo(todo){
    const {id, content} = todo;
    const todoIndex = this.state.todos.findIndex(todo => todo.id === id );
    let newTodos = [...this.state.todos];
    newTodos[todoIndex] = {...newTodos[todoIndex], content: content };
    this.setState({ todos: newTodos });
  }
  toggleCompletion(id){
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={this.deleteTodo}
          modifyTodo={this.editTodo}
          completeTodo={this.toggleCompletion}
        />
    ));
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <div className="todos">{todos}</div>
        <NewTodoForm addTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodoList;
