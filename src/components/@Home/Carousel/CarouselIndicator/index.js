import React, { Component } from 'react';
import './index.scss';

export default class CarouselIndicator extends Component {
  render() {
    return (
      <div
        className={
          this.props.index === this.props.activeIndex
            ? "carousel__indicator carousel__indicator--active"
            : "carousel__indicator"
        }
        onClick={this.props.onClick}
      >
      </div>
    );
  }
}
