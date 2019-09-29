import React, { Component } from 'react';

import FormInput from './Shared/FormInput';
import FormButton from './Shared/FormButton';

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
        <FormInput />
        <FormButton />
      </form>
    );
  }
}