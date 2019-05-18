import React, { Component } from 'react';
import ContactFloatingActionButton from './ContactFloatingActionButton';
import './index.scss';


export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <ContactFloatingActionButton />
      </div>
    );
  }
}
