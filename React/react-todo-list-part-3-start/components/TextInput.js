import React, { Component } from 'react';

import TextDisplay from './TextDisplay';

export default class TextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: 'inited',
    }
  }

  deleteLetter() {
    this.setState({
      inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
    });
  }

  handleChange(e) {
    const inputText = e.target.value;
    this.setState({inputText})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="This is going to be text"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
      </div>
    );
  }
}