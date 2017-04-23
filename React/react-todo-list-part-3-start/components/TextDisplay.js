import React, { Component } from 'react'

export default class TextDisplay extends Component {

  handleClick() {
    this.props.deleteLetter();
  }

  render() {
    return (
      <div>
        <div>
          <div>I'm displaying text: {this.props.text}</div>
          <button onClick={this.handleClick.bind(this)}>Delete one letter</button>
        </div>
      </div>
    )
  }
}