import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit as ED, FaTrash as EX } from "react-icons/fa";

import Footer from "../footer/Footer";
import Header from "../header/Header";

import Barra from "../img/barraQuemSomos.png"

import "./PaginaDoacao.css";

function PaginaDoacao() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/rest/produto")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setProdutos(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch("/rest/produto/" + id, {
      method: "DELETE",
    })
      .then(() => {
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <div className="container-doacao">
        <h1>Meus Produtos</h1>
        <div className="barra"><img src={Barra} alt="Bara divisória" /></div>
        <div className="container-produtos">
          <button className="btn-incluir">
            <Link to="/incluir" style={{ textDecoration: 'none' }}><p>Adicionar Produto</p></Link>
          </button>
          <table border="0">
            <thead>
              <tr className="table-head">
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Categoria</th>
                <th>Editar/Excluir</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{produto.titulo}</td>
                  <td>R$ {produto.preco}</td>
                  <td>{produto.quantidade}</td>
                  <td>
                    <Link title="Editar" to={`/editar/${produto.codigo}`}>
                      /<ED />
                    </Link>{" "}
                    |
                    <Link
                      title="Excluir"
                      to="/"
                      onClick={handleDelete.bind(this, produto.codigo)}
                    >
                      <EX />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr colSpan="5">Produtos gerados da API</tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaginaDoacao;

/* <div className="upload-arquivo">
            <h1>Faça aqui o upload <br/> do arquivo .csv</h1>
            <div className="enviar-arquivo">
              <input type="file" name="arquivo" required/>
            </div>
            <button type="submit">Enviar</button>
          </div> */
