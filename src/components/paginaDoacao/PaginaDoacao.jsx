import React, {useState} from 'react'

import Footer from '../footer/Footer'
import Header from '../header/Header'

import './PaginaDoacao.css'

function paginaDoacao() {


  return (
    <div>
        <Header/>
        <div className="container-doacao">
          <div className="upload-arquivo">
            <h1>Faça aqui o upload <br/> do arquivo .csv</h1>
            <div className="enviar-arquivo">
              <input type="file" name="arquivo" />
            </div>
            <button type="submit">Enviar</button>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default paginaDoacao
