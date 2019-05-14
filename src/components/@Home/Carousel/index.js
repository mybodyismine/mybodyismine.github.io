import React, { Component } from 'react';
import { CarouselLeftArrow, CarouselRightArrow } from './CarouselArrow';
import CarouselIndicator from './CarouselIndicator';
import CarouselSlide from './CarouselSlide';
import './index.scss';


export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <div className="background-image">
          <img
            src={this.props.slides[this.state.activeIndex].backgroundImage}
            alt="background"
          />
        </div>
        <div className="carousel-main">
          <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
          <div className="carousel__slides">
            {this.props.slides.map((slide, index) =>
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            )}
          </div>
          <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
        </div>

        <dv className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </dv>
      </div>
    );
  }
}
