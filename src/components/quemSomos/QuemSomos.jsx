import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

import './QuemSomos.css'

import Barra from '../img/barraQuemSomos.png'

export default function QuemSomos() {
  return (
    <div>
      <Header/>
        <div className="container-equipe">
          <h1>NOSSA EQUIPE</h1>
          <div className="barra-equipe"><img src={Barra} alt="Barra divisória" width="930px" /></div>
          <div className="equipe">
            <div className="nome-esq">
              <div className="dev">
                <h4>Emanuelle de Fátima - RM88684</h4>
                <p>github.com/emanuellex</p>
              </div>
              <div className="dev">
                <h4>Ricardo da Silva Costa- RM87404</h4>
                <p>github.com/ricardocossta</p>
              </div>
              <div className="dev">
                <h4>Yury Oliveira da Silva - RM85595</h4>
                <p>github.com/yurysilva</p>
              </div>
            </div>
            <div className="nome-dir">
              <div className="dev-dir">
                <h4>Israel Vieira Ribeiro - RM89347</h4>
                <p>github.com/isrcode</p>
              </div>
              <div className="dev-dir">
                <h4>Thiago Vazquez Enninger - RM86664</h4>
                <p>github.com/thiagoenninger</p>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}
