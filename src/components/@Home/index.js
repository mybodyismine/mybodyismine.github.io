import React from 'react';
import { Link } from 'react-router-dom';

import PageComponent from 'components/PageComponent';
import Carousel from './Carousel';
import carouselContent from './CarouselContent';
import './index.scss';

export default class Home extends PageComponent {
  render() {
    return (
      <div className="home">
        <div className="page">
          <h1 className="title">Tubuhku, Milikku</h1>
          <p className="text-sm font-italic">Tempatmu bertanya seputar seksualitas</p>
          <div className="menus">
            <Link className="menu"><div>Artikel</div></Link>
            <Link className="menu"><div>Video</div></Link>
            <Link className="menu"><div>Pertanyaan</div></Link>
            <Link className="menu"><div>Penyintas</div></Link>
            <Link className="menu"><div>Tentang Kami</div></Link>
          </div>
          <div className="carousel-container">
            <Carousel slides={carouselContent}/>
          </div>
        </div>
      </div>
    );
  }
}
