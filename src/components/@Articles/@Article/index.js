import React from 'react';
import PageComponent from 'components/PageComponent';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import posts from 'components/posts';
import './index.scss';

export default class Article extends PageComponent {
  render() {
    const slug = this.props.match.params.slug;
    let post = {
      title: 'Not Found'
    };
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].slug === slug) {
        post = posts[i];
      }
    }
    return (
      <div className="article">
        <Navbar />
        <div className="post container">
          <h1>{post.title}</h1>
          <img src={post.backgroundImage} alt="-" />
          {post.content}
        </div>
        <Footer />
      </div>
    );
  }
}
