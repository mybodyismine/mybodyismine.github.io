import React, { Component } from 'react';
import './index.scss';

export default class CarouselSlide extends Component {
  render() {
    return (
      <div
        className={
          this.props.index === this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <div className="carousel-slide__content">{this.props.slide.content}</div>
      </div>
    );
  }
}
