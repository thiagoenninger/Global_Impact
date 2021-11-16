import { useState } from "react";
import Modal from "../modalLogin/Modal";
import "./Header.css";

export default function Header() {
  const [show, setShow] = useState(false);


  return (
      <div className="Navbar">
        <div className="leftSide">
          <div className="links">
            <a href="/">&lt;FOOD/DEV&gt;</a>
          </div>
        </div>
        <div className="rightSide">
          <div className="links">
            <a href="paginaDoacao">Doação</a>
            <a href="reservaProdutos">Reservar Produtos</a>
            <a href="cadastro">Cadastro</a>
            <a href="quemSomos">Quem Somos</a>
          </div>
          <div className="ModalHeader">
                <button className="botao-login" onClick={() => setShow(true)}>
                  Login
                </button>
                <Modal onClose={() => setShow(false)} show={show}/>
          </div>
        </div>
      </div>
  );
}
