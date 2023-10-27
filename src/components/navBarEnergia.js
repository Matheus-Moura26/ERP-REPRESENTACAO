
import React from 'react'
import { Link } from 'react-router-dom';


function navBarEnergia() {
  return (
    <nav >
        <div className='navBarEnergia-card-navbar'>
            <Link  to="/leituras">
            <li className='navBar-button'>Leituras</li>
            </Link>
            <Link  to="/financeiro">
            <li className='navBar-button'>Financeiro</li>
            </Link>
            <Link  to="/requisicao">
            <li className='navBar-button'>Requisição</li>
            </Link>
        </div>
    </nav>    
  )
}

export default navBarEnergia

