import React, { Component } from 'react';
import ContactBubbleChat from './ContactBubbleChat';
import ContactFloatingActionButton from './ContactFloatingActionButton';
import './index.scss';


export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBubbleOpen: false,
    };

    this.toggleBubbleOpen = this.toggleBubbleOpen.bind(this);
  }

  toggleBubbleOpen() {
    this.setState((state) => ({
      ...state,
      isBubbleOpen: !state.isBubbleOpen,
    }));
  }

  render() {
    return (
      <div className="contact">
        <ContactBubbleChat isOpen={this.state.isBubbleOpen} />
        <ContactFloatingActionButton onClick={this.toggleBubbleOpen} />
      </div>
    );
  }
}
