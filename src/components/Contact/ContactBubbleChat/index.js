import React, { Component } from 'react';
import profpic from 'assets/images/abellia.jpg';
import './index.scss';


export default class ContactBubbleChat extends Component {
  constructor(props) {
    super(props);
    this.chatInput = React.createRef();

    this.state = {
      messages: [{
        text: 'Halo, apakah ada yang bisa saya bantu?',
        source: 'reply',
      }],
    };

    this.addText = this.addText.bind(this);
    this.onSendButtonClick = this.onSendButtonClick.bind(this);
    this.onChatInputKeyUp = this.onChatInputKeyUp.bind(this);
  }

  onChatInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSendButtonClick();
    }
  }

  addText(message, isRequest) {
    this.setState((state) => {
      let newMessages = state.messages;
      newMessages.unshift({
        text: message,
        source: isRequest ? 'request' : 'reply'
      });
      return {
        ...state,
        messages: newMessages
      };
    });
  }

  onSendButtonClick() {
    this.addText(this.chatInput.current.value, true);
    this.chatInput.current.value = '';
  }

  render() {
    return (
      <div className={"contact-bubble-chat" + (this.props.isOpen ? ' active' : '')}>
        <div className="header">
          <div className="photo-wrapper">
            <img src={profpic} alt="profpic"/>
          </div>
          <div className="profile">
            <div className="name">
              Gaby Abellia
            </div>
            <div className="status">
              Konselor - Online
            </div>
          </div>
        </div>
        <div className="body">
          {this.state.messages.map((item, index) => (
            <div className={"message " + item.source}>
              {item.text}
            </div>
          ))}
        </div>
        <div className="footer">
          <input type="text" className="chat" ref={this.chatInput} onKeyUp={this.onChatInputKeyUp} />
          <button className="send" onClick={this.onSendButtonClick}>
            <i className="fa fa-paper-plane" />
          </button>
        </div>
      </div>
    );
  }
}
