import React, {useRef, useEffect, useState}  from 'react'

import Footer from '../footer/Footer'
import Header from '../header/Header'

import CapaHome from '../img/capa_home.jpg'
// import Tomates from '../img/tomates.jpg'
// import NaoPerecivel from '../img/nao_perecivel.jpg'
import Zaffari from '../img/zaffari.jpg'
import PaoAcucar from '../img/pao_de_acucar.jpg'
import Barra from '../img/barraQuemSomos.png'


import './Home.css'

export default function Home() {
 
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasAnimated2, setHasAnimated2] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const imageRef2 = useRef();
  const imageRef = useRef();
  const animatePao = () => {
    const ref = imageRef.current;
    ref.classList.toggle('hasAnimated');
    setHasAnimated(true);
  }
  const animateZaffari = () => {
    const ref2 = imageRef2.current;
    ref2.classList.toggle('hasAnimated');
    setHasAnimated2(true);
  }

  useEffect(() => {
    if (scrollPosition > 600 && !hasAnimated) {
      animatePao();
    }
    if (scrollPosition > 900 && !hasAnimated2) {
      animateZaffari();
    }
  }, [scrollPosition])


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrollPosition);


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
        <div className="container-parceiros">
          <h1 id="titulo-parceiros">NOSSOS PARCEIROS</h1>
         <div className="parceiro-01" >
          <img ref={imageRef} className="imagem-mercado-pao" src={PaoAcucar} alt="Imagem do mercado Pão de Açucar"/> 
            <div className="texto-parceiro">
              <h1>Pão de Açucar</h1>
              <img id="barraDivisoria" src={Barra} alt="barra divisória" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod enim, molestiae quisquam harum beatae minima esse, consequatur nemo officia corrupti vel earum optio quam doloremque voluptatem explicabo impedit blanditiis laudantium?</p>
            </div>
         </div>
         <div className="parceiro-02">
          <div className="texto-parceiro">
            <h1>Zaffari</h1>
            <img id="barraDivisoria" src={Barra} alt="barra divisória" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod enim, molestiae quisquam harum beatae minima esse, consequatur nemo officia corrupti vel earum optio quam doloremque voluptatem explicabo impedit blanditiis laudantium?</p>
          </div> 
          <img ref={imageRef2} className="imagem-mercado" src={Zaffari} alt="Imagem do mercado Zaffari" />
         </div>
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

/*
  ref={imageRef}

<div className="card-01">
           <img src={Tomates} alt="imagem de tomates" width="450px" />
           <div className="barra"></div>
           <p className="texto-card">Produtos de validade rápida</p>
           <button className="btn-reserva"><a href="#">Reservar</a></button>
         </div>
         <div className="card-02">
           <img src={NaoPerecivel} alt="Produtos não pereciveis" width="450px" />
           <div className="barra"></div>
           <p className="texto-card">Produtos não perecíveis</p>
           <button className="btn-reserva"><a href="#">Reservar</a></button>
           </div>*/