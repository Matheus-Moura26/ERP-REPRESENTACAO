import React from 'react'
import { Link } from 'react-router-dom'

import "../../styles/components/energia/navBarEnergiaFinanceiro.css"


export default function NavBarEnergiaFinanceiro() {
  return (
    <div className='energia-financeiro-card-navbar'>
        <Link to="/financeiro">
        <button className='energia-financeiro-card-navbar-button'>Main</button>
        </Link>
        <Link to="/clienteUsinas">
        <button className='energia-financeiro-card-navbar-button' >Clientes e Usinas</button>
        </Link>
        <Link to="/outros">
        <button className='energia-financeiro-card-navbar-button' >Outros</button>
        </Link>
    </div>
  )
}
