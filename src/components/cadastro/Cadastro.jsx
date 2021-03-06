import React from 'react'
import InputMask from 'react-input-mask'	

import Footer from '../footer/Footer'
import Header from '../header/Header'

import Capa from '../img/capa_cadastro.jpg'
import Barra from '../img/barraQuemSomos.png'

import './Cadastro.css'

export default function Cadastro() {


  return (
    <div>
        <Header/>
        <div className="container-cadastro">
          <div className="topo">
            <img src={Capa} alt="Imagem de pessoas organizando doações" />
            <div className="topo-texto">
              <h1>SUA DOAÇÃO</h1>
              <h1>SALVA VIDAS</h1>
              <p>Faça a diferença</p>
            </div>
          </div>
          <h1 id="titulo-cadastro">CADASTRO</h1>
          <div className="barra-equipe">
            <img src={Barra} alt="Barra divisória" className="img-barra"/>
          </div>
          <div className="form-cadastro">
            <form>
              <label>Nome</label>
              <input type="text" required/>

              <label>Email</label>
              <input type="email" required/>

              <label>Senha</label>
              <input type="password" required/>

              <label>Telefone (DDD)</label>
              <InputMask mask="(99)99999-9999" required/>

              <label>Endereço</label>
              <input type="text" required/>
              <div className="complemento">
                <input type="text" placeholder="Cidade" required/> <input type="text" placeholder="Estado" required/> <input type="text" placeholder="CEP" required/>
              </div>

              <label>CNPJ</label>
              <input type="text" required/>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
