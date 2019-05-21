import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import { ROUTE_HOME, ROUTE_ARTICLES } from 'routes';
import './index.scss';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to={ROUTE_HOME}>
          <div className="title">
            <img src={logo} alt="Tubuhku, Milikku" />
          </div>
        </Link>
        <div className="menus">
          <Link className="menu" to={ROUTE_ARTICLES}>Artikel</Link>
          <Link className="menu">Video</Link>
          <Link className="menu">Pertanyaan</Link>
          <Link className="menu">Penyintas</Link>
          <Link className="menu">Tentang Kami</Link>
        </div>
      </div>
    );
  }
}
