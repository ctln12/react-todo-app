import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  handleDelete(evt){
    this.props.removeTodo(this.props.todo.id);
  }
  toggleForm(){
    this.setState({ editable: !this.state.editable })
  }
  updateTodo(todo){
    this.props.modifyTodo(todo);
    this.toggleForm();
  }
  render() {
    let result;
    if (this.state.editable) {
      result = <EditTodoForm todo={this.props.todo} updateTodo={this.updateTodo} />
    } else {
       result = (<div className="Todo">
        {this.props.todo.content}
        <button onClick={this.toggleForm}>Edit</button>
        <button onClick={this.handleDelete}>x</button>
      </div>)
    }
    return result;
  }
}

export default Todo;
