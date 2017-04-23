import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: '',
    todos: [
      {
        text: "nesto"
      },
      {
        text: "nesto2"
      },
      {
        text: "nesto3"
      }
    ]
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      text: e.target.value
    })
  }
  handleSubmit(e) {
    this.setState({
      text: '',
      todos: [...this.state.todos, {
        text: this.state.newTodo
      }]
    })
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <p>Add todo:</p>
        <form onSubmit={this.handleSubmit.bind(this)} >
        <input type="text" onChange={this.handleChange.bind(this)} name="newTodo" value={this.state.text}/>
        <input type="submit" />
        </form>

          <ul>
        {this.state.todos && this.state.todos.map(todo => {
          return <li>{todo.text}</li>
        })}
          </ul>
      </div>
    );
  }
}

export default App;
