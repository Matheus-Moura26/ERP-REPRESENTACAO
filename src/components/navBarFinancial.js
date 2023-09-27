//import library and hooks
import React from 'react';
import { Link } from 'react-router-dom';



//import style
import '../styles/components/navbarfinancial.css'
import '../styles/components/components.css'

export default function NavBarFinancial() {
  return (
            <nav >
                <ul id='navBar-financial-card'>
                    <h1 id='navBar-financial-title'>Financeiro</h1>
                    <Link  to="/liquidezComissaoHomePage">
                      <li className='navBar-financial-button'>Comissão líquidez</li>
                    </Link>
                    <Link  to="/">
                      <li className='navBar-financial-button'>Botão</li>
                    </Link>
                    <Link  to="/">
                      <li className='navBar-financial-button'>Botão</li>
                    </Link>
                </ul>
            </nav>
  )
}
