import React, { Component } from 'react';
import './EditTodoForm.css';

class EditTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = { content: this.props.todo.content, id: this.props.todo.id }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({ content: evt.target.value });
  }
  handleSubmit(evt){
    evt.preventDefault();
    this.props.modifyTodo({content: this.state.content, id: this.state.id });
    const todoDiv = document.getElementById(this.state.id);
    const editTodoForm = todoDiv.querySelector("form.EditTodoForm");
    const todo = todoDiv.querySelector(".Todo");
    editTodoForm.classList.remove("display");
    todo.classList.remove("hide");
  }
  render() {
    return (
      <form className="EditTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="editTodo">Edit Todo</label>
        <input
          id="editTodo"
          name="editTodo"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <button>Modify todo</button>
      </form>
    );
  }
}

export default EditTodoForm;
