import React, { Component } from 'react';
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

export default class Chat extends Component {
  componentDidMount() {
    addResponseMessage(
      'Olá eu sou a Kitney Spears! Seja bem-vindo ao SJ90, qual sua dúvida?'
    );
  }

  handleNewUserMessage = () => {
    console.log('New message incomig!');
    // Now send the message throught the backend API
  };

  render() {
    return (
      <Widget
        handleNewUserMessage={this.handleNewUserMessage}
        profileAvatar="https://media.giphy.com/media/KKjjVZ1VuoKas/giphy.gif"
        title="Canal de Comunicação"
        subtitle="Atendente: Kitney Spears"
      />
    );
  }
}
