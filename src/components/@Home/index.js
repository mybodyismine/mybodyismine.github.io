import React from 'react';
import PageComponent from 'components/PageComponent';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Carousel from './Carousel';
import carouselContent from './CarouselContent';
import './index.scss';

const questions = [
  {
    title: 'Pacarku memaksaku berhubungan seksual sebagai tanda sayang kepadanya, padahal aku tidak mau karena aku tau itu salah, tetapi aku takut pacarku meninggalkanku. Aku harus bagaimana?',
  },
  {
    title: 'Bagaimana cara aku bisa menghindari kehamilan tidak diinginkan?',
  },
  {
    title: 'Apa itu Penyakit Menular Seksual dan bagaimana penularannya?',
  },
  {
    title: 'Aku merasa tubuhku tidak sama seperti perempuan lainnya. Aku masih memakai singlet sementara teman-temanku sudah memakai BH. Apakah aku normal?',
  },
  {
    title: 'Apa hukuman bagi pelaku kekerasan seksual?',
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
            <h1>Hotline</h1>
            <p>
              Apabila kamu adalah korban kekerasan seksual, jangan ragu-ragu untuk mencari pertolongan, karena kami semua ingin menolongmu!
            </p>
            <p>
              Kirim e-mail pelaporan dengan berisikan nama, no telepon, alamat, dan kekerasan yang kamu alami,
              atau hubungi kami langsung di "999", atau SMS/WA ke 081234567890. Kami hadir untukmu.
            </p>
          </div>
          <div className="faq">
            <h2>Punya Pertanyaan?</h2>
            <div className="questions">
              {questions.map((question, index) => (
                <div className="question">
                  {question.title}
                </div>
              ))}
            </div>
            <p>Apabila kamu ingin bertanya seputar seksualitas, jangan ragu menggunakan fasilitas konsultasi online di pojok kanan bawah! Konselor kami akan menjawab pertanyaan kamu.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
