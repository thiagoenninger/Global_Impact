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
                  <p>Tomate</p>
                  <p>Qtde: 17 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Brócolis</p>
                  <p>Qtde: 12 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Batata</p>
                  <p>Qtde: 22 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Couve</p>
                  <p>Qtde: 09 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Banana</p>
                  <p>Qtde: 14 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Maçã</p>
                  <p>Qtde: 11 kg</p>
                  <input type="checkbox"/>
                </div>


              </div>
              <button type="submit" value="Enviar" className="btn-reservar">Reservar</button>
            </div>

            <div className="produtos-np">
              <h3>Produtos não perecíveis</h3>
              <div className="box-produtos">
                <div className="produto-a">
                  <p>Arroz</p>
                  <p>Qtde: 37 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Feijão</p>
                  <p>Qtde: 26 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Macarrão</p>
                  <p>Qtde: 19 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Açúcar</p>
                  <p>Qtde: 09 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Sal</p>
                  <p>Qtde: 07 kg</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Farinha</p>
                  <p>Qtde: 21 kg</p>
                  <input type="checkbox"/>
                </div>

              </div>
              <button type="submit" className="btn-reservar">Reservar</button>
            </div>
            
            <div className="produtos-hp">
              <h3>Produtos de higiene pessoal</h3>
              <div className="box-produtos">
                <div className="produto-a">
                  <p>Sabonete</p>
                  <p>Qtde: 43 unidades</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Shampo</p>
                  <p>Qtde: 31 unidades</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Desodorante</p>
                  <p>Qtde: 18 unidades</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Pasta dental</p>
                  <p>Qtde: 27 unidades</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-a">
                  <p>Escova dental</p>
                  <p>Qtde: 75 unidades</p>
                  <input type="checkbox"/>
                </div>

                <div className="produto-b">
                  <p>Papel higiênico</p>
                  <p>Qtde: 33 unidades</p>
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
