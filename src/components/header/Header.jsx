import { useState } from "react";
import Modal from "../modalLogin/Modal";
import "./Header.css";

export default function Header() {
  const [show, setShow] = useState(false);


  return (
      <div className="Navbar">
        <div className="leftSide">
          <div className="links">
            <a href="#">FOOD/DEV</a>
          </div>
        </div>
        <div className="rightSide">
          <div className="links">
            <a href="#">Formulário Doação</a>
            <a href="#">Reservar Produtos</a>
            <a href="#">Cadastro</a>
            <a href="#">Quem Somos</a>
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