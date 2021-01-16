import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = { newTodo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({ newTodo: evt.target.value });
  }
  handleSubmit(evt){
    evt.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="newTodo">New Todo</label>
          <input
            id="newTodo"
            name="newTodo"
            placeholder="New Todo"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button>Add todo</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;
