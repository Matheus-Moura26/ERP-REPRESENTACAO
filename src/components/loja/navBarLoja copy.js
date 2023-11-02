import React from 'react'
import { Link } from 'react-router-dom'

import "../../styles/components/loja/navBarLojacopy.css"


export default function NavBarLojaCopy() {
  return (
    <div className='loja-card-navbar'>
        <Link to="/dropshippingHomePage">
        <button className='loja-card-navbar-button'>Incluir Produtos</button>
        </Link>
        <Link to="/dropshippingHomePage">
        <button className='loja-card-navbar-button' >Outro</button>
        </Link>
        <Link to="/dropshippingHomePage">
        <button className='loja-card-navbar-button' >Configurações</button>
        </Link>
    </div>
  )
}
