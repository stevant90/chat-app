import React, { Component } from 'react';

import { AUTHOR_NAME } from '../Redux/constants/apiInfo';

import FormInput from './Shared/FormInput';
import FormButton from './Shared/FormButton';

export default class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleMessageSave = event => {
    event.preventDefault();

    const { saveMessage } = this.props;
    const data = {
      message: this.state.message,
      author: AUTHOR_NAME
    };

    saveMessage(data);

    this.setState({ message: '' });
  }

  render() {
    const { message } = this.state;

    return (
      <form className={`ChatForm ${!message ? 'disabled' : ''}`}>
        <FormInput 
          className="ChatForm__input"
          type="text"
          value={message}
          changeHandler={this.handleInputChange}
          name="message"
        />
        <FormButton 
          className="ChatForm__btn"
          action={this.handleMessageSave}
          btnText="Send"
        />
      </form>
    );
  }
}