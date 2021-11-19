import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../header/Header";
import Footer from '../footer/Footer'

import './AdicaoProduto.css'

import Barra from "../img/barraQuemSomos.png"

function FormProduto(props) {

  let id = null

  // if(props.match.path.toLowerCase().includes('editar')) {
  //   id = props.match.params.id
  // }

  const [novo, setNovo] = useState({
    codigo: id,
    produto: "",
    categoria: "",
    quantidade: ""
  })

  let metodo = 'post'
  if(id) {
    metodo = 'put'
  }

  const handleChange = (e) => {
    setNovo({...novo, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch("/rest/produto/"+(id ? id: ""), {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },body: JSON.stringify(novo)
    }).then(() => {
      window.location = "/paginaDoacao"
    })
  }

  useEffect(() => {
    if(id) {
      fetch("/rest/produto/"+id).then(resp => {
        return (resp.json())
      }).then(data =>{
        setNovo(data)
      })
    }
  }, [id])

  return(
    <div className="container">
      <Header/>
      <div className="container-add">
        <h1>Formulario de Produtos</h1>
        <div className="barra"><img src={Barra} alt=""/></div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Produtos</legend>
            <div>
              <input type="text" name="produto" value={novo.produto} 
              placeholder="Produto"  
              onChange={handleChange}/>
            </div>
            <div>
              <input type="text" name="categoria" value={novo.categoria} 
              placeholder="Categoria"  
              onChange={handleChange}/>
            </div>
            <div>
              <input type="number" name="quantidade" value={novo.quantidade} 
              placeholder="Quantidade"  
              onChange={handleChange}/>
            </div>
            <div className="enviar-cancelar">
              <a href="/paginaDoacao">Cancelar</a>
              <button type="submit">ENVIAR</button>
            </div>
          </fieldset>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default FormProduto