import React from 'react';
import PageComponent from 'components/PageComponent';
import Navbar from 'components/Navbar';
import Carousel from './Carousel';
import carouselContent from './CarouselContent';
import logoKomnasPerempuan from 'assets/images/logo-komnas-perempuan.png';
import './index.scss';

const questions = [
  {
    title: 'Pacarku berkata aku tidak menyayanginya apabila aku tidak mau berhubungan seks dengannya. Apa yang harus aku lakukan?',
    text: 'Rasa cinta tidak diukur hanya karena bla bla bla ... baca lebih lanjut',
  },
  {
    title: 'Pacarku berkata aku tidak menyayanginya apabila aku tidak mau berhubungan seks dengannya. Apa yang harus aku lakukan?',
    text: 'Rasa cinta tidak diukur hanya karena bla bla bla ... baca lebih lanjut',
  },
  {
    title: 'Pacarku berkata aku tidak menyayanginya apabila aku tidak mau berhubungan seks dengannya. Apa yang harus aku lakukan?',
    text: 'Rasa cinta tidak diukur hanya karena bla bla bla ... baca lebih lanjut',
  },
];

export default class Home extends PageComponent {
  render() {
    return (
      <div className="home">
        <div className="page">
          <Navbar />
          <div className="carousel-container">
            <Carousel slides={carouselContent}/>
          </div>
        </div>
        <div className="page second">
          <div className="join">
            <div className="circle">
              <span>Kamu penyintas kekerasan seksual? Ikuti komunitas penyintas kami!</span>
            </div>
          </div>
          <div className="questions">
            {questions.map((question, index) => (
              <div className="question">
                <div className="question-header">{question.title}</div>
                <div className="question-body">{question.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer">
          <div className="container footer-content">
            <img className="logo" src={logoKomnasPerempuan} alt="komnas perempuan" />
            <h3>Didukung oleh:</h3>
          </div>
        </div>
      </div>
    );
  }
}
