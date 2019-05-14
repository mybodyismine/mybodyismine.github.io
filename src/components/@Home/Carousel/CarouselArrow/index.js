import React, { Component } from 'react';
import './index.scss';

export class CarouselArrow extends Component {
  constructor(props) {
    super(props);
    this.direction = '';
  }

  render() {
    return (
      <div
        className={`carousel__arrow carousel__arrow--${this.direction}`}
        onClick={this.props.onClick}
      >
        <span className={`fa fa-2x fa-angle-${this.direction}`} />
      </div>
    );
  }
}

export class CarouselLeftArrow extends CarouselArrow {
  constructor(props) {
    super(props);
    this.direction = 'left';
  }
}

export class CarouselRightArrow extends CarouselArrow {
  constructor(props) {
    super(props);
    this.direction = 'right';
  }
}

