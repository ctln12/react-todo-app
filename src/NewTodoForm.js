import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = { content: "", id: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({ content: evt.target.value });
  }
  handleSubmit(evt){
    evt.preventDefault();
    this.props.addTodo({content: this.state.content, id: uuidv4() });
    this.setState({ content: "", id: "" });
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
            value={this.state.content}
          />
          <button>Add todo</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;
