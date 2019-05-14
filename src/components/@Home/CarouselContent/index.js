import React, { Component } from 'react';
import randomBackground1 from 'assets/images/bg-01.png';
import randomBackground2 from 'assets/images/bg-02.jpg';
import randomBackground3 from 'assets/images/bg-03.jpg';
import './index.scss';

class CarouselCard extends Component {
  render() {
    return (
      <div className="carousel-card">
        <div className="card">
          <h2>{this.props.title}</h2>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default [
  {
    content: (
      <CarouselCard
        title="Get Protected"
        text="Curious about condoms? Interested in IUDs? Then get smart about all the best birth control that's out there. Compare methods, learn about side effects, and figure out which one is right for you!"
      />
    ),
    backgroundImage: randomBackground1,
  }, {
    content: (
      <CarouselCard
        title="Ask Us Anything: Body Talk"
        text="Anatomy, biology, and body image. Loving your body and understanding how it works isn't always easy. We're here for all your questions, concerns, and insecurities. Ask away!"
      />
    ),
    backgroundImage: randomBackground2,
  }, {
    content: (
      <CarouselCard
        title="4 Signs You’re About to Have Sex for the Wrong Reasons"
        text="How can you know that you’re about to have sex for the wrong reasons? When should you reconsider?"
      />
    ),
    backgroundImage: randomBackground3,
  },
];
