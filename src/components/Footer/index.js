import React, { Component } from 'react';
import logoIndonesiaUntukKemanusiaan from'assets/images/logo-indonesia-untuk-kemanusiaan.png';
import logoKemdikbud from 'assets/images/logo-kemdikbud.png';
import logoKemsos from'assets/images/logo-kemsos.png';
import logoKoalisiPerempuanIndonesia from'assets/images/logo-koalisi-perempuan-indonesia.png';
import logoKomnasPerempuan from 'assets/images/logo-komnas-perempuan.png';
import logoKpai from'assets/images/logo-kpai.png';
import logoLbhApik from'assets/images/logo-lbh-apik.png';
import logoLrcKjham from'assets/images/logo-lrc-kjham.png';
import logoSaveChildren from'assets/images/logo-save-children.png';
import './index.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container footer-content">
          <div className="logo-row">
            <a href="https://www.komnasperempuan.go.id/"><img className="logo first" src={logoKomnasPerempuan} alt="komnas perempuan" /></a>
          </div>
          <h3>Didukung oleh:</h3>
          <div className="logo-row">
            <img className="logo second" src={logoKemdikbud} alt="logo-kemdikbud" />
            <img className="logo second" src={logoKemsos} alt="logo-kemsos" />
            <img className="logo second" src={logoKpai} alt="logo-kpai" />
          </div>
          <div className="logo-row">
            <img className="logo third" src={logoIndonesiaUntukKemanusiaan} alt="logo-indonesia-untuk-kemanusiaan" />
            <img className="logo third" src={logoKoalisiPerempuanIndonesia} alt="logo-koalisi-perempuan-indonesia" />
            <img className="logo third" src={logoLbhApik} alt="logo-lbh-apik" />
            <img className="logo third" src={logoLrcKjham} alt="logo-lrc-kjham" />
            <img className="logo third" src={logoSaveChildren} alt="logo-save-children" />
          </div>
          <p>&copy; 2019. KOMISI NASIONAL ANTI KEKERASAN TERHADAP PEREMPUAN.</p>
        </div>
      </div>
    );
  }
}
