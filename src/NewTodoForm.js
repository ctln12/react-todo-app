import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = { content: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt){
    evt.preventDefault();
    this.props.addTodo({...this.state, id: uuidv4(), completed: false });
    this.setState({ content: ""});
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="content">New Todo</label>
          <input
            id="content"
            name="content"
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
