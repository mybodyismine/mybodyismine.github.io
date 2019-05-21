import React from 'react';
import { Link } from 'react-router-dom'
import PageComponent from 'components/PageComponent';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import posts from 'components/posts';
import { ROUTE_ARTICLE } from 'routes';
import './index.scss';

export default class Articles extends PageComponent {
  render() {
    return (
      <div className="articles">
        <Navbar />
        <div className="cards">
          {posts.map((post, _) => (
            <Link to={ROUTE_ARTICLE.replace(':slug', post.slug)} >
              <div className="card">
                <div className="card-header">
                  <img src={post.backgroundImage} alt="thumb" />
                </div>
                <div className="card-body">
                  <h2>{post.title}</h2>
                  <p>{post.preview} Baca lebih lanjut ...</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
