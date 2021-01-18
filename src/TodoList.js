import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = { todos: [{ content: "Do laundry", id: uuidv4() }, { content: "Do homework", id: uuidv4()}, { content: "Do yoga", id: uuidv4() }] };
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
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
  displayForm(todoId){
    const todoDiv = document.getElementById(todoId);
    const editTodoForm = todoDiv.querySelector("form.EditTodoForm");
    const todo = todoDiv.querySelector(".Todo");
    editTodoForm.classList.add("display");
    todo.classList.add("hide");
  }
  render() {
    return (
      <div className="TodoList">
        <NewTodoForm addTodo={this.createTodo} />
        <div>
          {this.state.todos.map(todo => (
            <div id={todo.id} key={todo.id}>
              <Todo
                id={todo.id}
                content={todo.content}
                removeTodo={this.deleteTodo}
                displayForm={this.displayForm}
              />
            <EditTodoForm todo={todo} modifyTodo={this.editTodo} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
