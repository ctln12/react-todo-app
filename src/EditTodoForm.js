import React, { Component } from 'react';

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
    this.props.updateTodo({content: this.state.content, id: this.state.id });
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
