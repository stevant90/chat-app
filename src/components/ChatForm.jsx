import React, { Component } from 'react';


export default class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <form className="ChatForm">
        Form
      </form>
    );
  }
}