import React, {useRef, useEffect, useState}  from 'react'

import Footer from '../footer/Footer'
import Header from '../header/Header'

import CapaHome from '../img/capa_home.jpg'
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
    if (scrollPosition > 500 && !hasAnimated) {
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
              <h1>Pão de Açúcar</h1>
              <img id="barraDivisoria" src={Barra} alt="barra divisória" />
              <p>O supermercado Pão de Açúcar firmou parceria com a FoodDevs desde o início do projeto, sendo um dos primeiros mercados a fazer parte deste grande projeto e vem contribuindo com doações de produtos e alimentos todos os meses. Destaque para a unidade Ana Rosa, do bairro Vila Mariana na capital de São Paulo, que está sempre no topo das que mais contribuem com doações. </p>
            </div>
         </div>
         <div className="parceiro-02">
          <div className="texto-parceiro">
            <h1>Zaffari</h1>
            <img id="barraDivisoria" src={Barra} alt="barra divisória" />
            <p>Maior rede de mercados do Rio Grande do Sul, os supermercados da rede Zaffari aderiram ao projeto recentemente, firmando o comprometimento com a nobre causa do projeto. A única unidade na capital paulista, localizada em Perdizes, contribui semanalmente com produtos destinados as entidades assistenciais.   </p>
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
              <input type="text" required/>

              <label>Email</label>
              <input type="email" required/>

              <label>Telefone</label>
              <input type="text" required/>

              <label>Assunto</label>
              <input type="text" required/>

              <label>Mensagem</label>
              <hr />
              <textarea cols="50" rows="10" required></textarea >

              <input type="submit" value="Enviar" id="form-botao"/>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
