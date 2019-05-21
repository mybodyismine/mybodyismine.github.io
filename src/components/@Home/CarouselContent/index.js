import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posts from 'components/posts';
import { ROUTE_ARTICLE } from 'routes';
import './index.scss';

class CarouselCard extends Component {
  render() {
    return (
      <div className="carousel-card">
        <Link to={ROUTE_ARTICLE.replace(':slug', this.props.post.slug)}>
          <div className="card">
            <h2>{this.props.post.title}</h2>
            {this.props.post.preview}
          </div>
        </Link>
      </div>
    );
  }
}

export default posts.map((post, _) => ({
  content: (
    <CarouselCard
      post={post}
    />
  ),
  backgroundImage: post.backgroundImage,
}));
