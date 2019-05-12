import React from 'react';

import PageComponent from 'components/PageComponent';

import './index.scss';

export default class Home extends PageComponent {
  render() {
    return (
      <div className="home">
        Hello!
      </div>
    );
  }
}
