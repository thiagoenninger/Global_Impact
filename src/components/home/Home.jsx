import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

import CapaHome from '../img/capa_home.jpg'

import './Home.css'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="container-home">
        <div className="cabecalho">
          <img src={CapaHome} alt="caminhão com alimentos para doação sendo descarregado por 3 pessoas" />
          <div className="cabecalho-texto">
            <h1>DESPERDICE <br/> ALIMENTOS OU DOE</h1>
            <h3>A OPÇÃO É SUA</h3>
          </div>
        </div>
        <div className="card-reserva">
          aqui terá 2 cards de reserva
        </div>
        <div className="contato">
          <div className="info-fooddev">
            <h1>CONECTE-SE <br/> CONOSCO</h1>
            <p>Av. Lins de Vasconselos, 1222 - Aclimação, São Paulo -SP</p>
            <p>contato@fooddev.com.br</p>
            <p>Tel: (11) 3455-7890</p>
          </div>
          <div className="form-contato">
            <form>
              <label >Nome</label>
              <input type="text"/>

              <label>Email</label>
              <input type="email" />

              <label>Telefone</label>
              <input type="text" />

              <label>Assunto</label>
              <input type="text" />

              <label>Mensagem</label>
              <hr />
              <textarea cols="50" rows="10"></textarea>

              <input type="submit" value="Enviar" id="form-botao"/>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
