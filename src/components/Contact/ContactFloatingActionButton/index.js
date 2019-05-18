import React, { Component } from 'react';
import './index.scss';


export default class ContactFloatingActionButton extends Component {
  render() {
    return (
      <div className="contact-fab">
        <div className="circle">
          <i className="fa fa-comment-dots"></i>
        </div>
      </div>
    );
  }
}
