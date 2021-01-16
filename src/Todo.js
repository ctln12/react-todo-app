import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt){
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div className="Todo">
        {this.props.content}
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}

export default Todo;
