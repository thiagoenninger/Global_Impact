import React, {useRef, useEffect, useState} from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'


import './ReservaProdutos.css'

export default function ReservaProdutos() {

  

  return (
    <div className="pg-reserva">
        <Header/>
          <div className="container-reserva">
            <div className="produtos-vr">
              <h3>Produtos de validade rápida</h3>
              <div className="box-produtos">
                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

              </div>
              <button type="submit" value="Enviar" className="btn-reservar">Reservar</button>
            </div>

            <div className="produtos-np">
              <h3>Produtos não perecíveis</h3>
              <div className="box-produtos">
                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

              </div>
              <button type="submit" className="btn-reservar">Reservar</button>
            </div>
            
            <div className="produtos-hp">
              <h3>Produtos de higiene pessoal</h3>
              <div className="box-produtos">
                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Nome do produto</p>
                  <p>Qtde: X</p>
                  <input type="checkbox"/>
                </div>

              </div>
              <button type="submit" className="btn-reservar">Reservar</button>
            </div>
          </div>
        <Footer/>
    </div>
  )
}
