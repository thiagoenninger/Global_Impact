import React from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'

import Cadastro from './components/cadastro/Cadastro'
import Home from './components/home/Home'
import PaginaDoacao from './components/paginaDoacao/PaginaDoacao'
import QuemSomos from './components/quemSomos/QuemSomos'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/paginaDoacao" element={<PaginaDoacao />} />
          <Route path="/quemSomos" element={<QuemSomos />} />  
        </Routes>
      </BrowserRouter>
    </div>
  )
}
