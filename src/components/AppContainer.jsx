import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMessages } from '../Redux/actions/getMessages';
import { postMessage } from '../Redux/actions/postMessage';

import ChatRoom from './ChatRoom';
import ChatForm from './ChatForm';

class AppContainer extends Component {

  componentDidMount() {
    window.scrollTo(0,document.body.scrollHeight);
    this.props.getMessages();
  }

  onMessageSave = data => {
    this.props.postMesage(data, () => this.props.getMessages());
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="AppContainer">
        <ChatRoom messages={messages} />
        <ChatForm saveMessage={this.onMessageSave} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages,
});

const mapDispatchToProps = dispatch => ({
  getMessages: () => dispatch(getMessages()),
  postMesage: (params, callback) => dispatch(postMessage(params, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);