import React, { Component } from 'react';
import './index.scss';


export default class ContactBubbleChat extends Component {
  render() {
    return (
      <div className={"contact-bubble-chat" + (this.props.isOpen ? ' active' : '')}>
        abc
      </div>
    );
  }
}
