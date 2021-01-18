import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }
  handleDelete(evt){
    this.props.removeTodo(this.props.id);
  }
  handleForm(evt){
    this.props.displayForm(this.props.id);
  }
  render() {
    return (
      <div className="Todo">
        {this.props.content}
        <button onClick={this.handleForm}>Edit</button>
        <button onClick={this.handleDelete}>x</button>
      </div>
    );
  }
}

export default Todo;
