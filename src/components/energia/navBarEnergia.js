
import React from 'react'
import { Link } from 'react-router-dom';

//css
import "../../styles/components/energia/navBarEnergia.css"


function NavBarEnergia() {
  return (
    <nav >
        <div className='navBarEnergia-card-navbar'>
            <Link  to="/leituras">
            <li >Leituras</li>
            </Link>
            <Link  to="/financeiro">
            <li >Financeiro</li>
            </Link>
            <Link  to="/requisicao">
            <li>Requisição</li>
            </Link>
        </div>
    </nav>    
  )
}

export default NavBarEnergia

