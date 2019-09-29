import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMessages } from '../Redux/actions/getMessages';
import { postMessage } from '../Redux/actions/postMessage';

import ChatRoom from './ChatRoom';
import ChatForm from './ChatForm';

class AppContainer extends Component {
  render() {
    return (
      <div className="AppContainer">
        <ChatRoom />
        <ChatForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  getMessages: () => dispatch(getMessages()),
  postMesage: params => dispatch(postMessage(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);