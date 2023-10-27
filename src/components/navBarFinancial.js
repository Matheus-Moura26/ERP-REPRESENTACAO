//import library and hooks
import React from 'react';
import { Link } from 'react-router-dom';



//import style
import '../styles/components/navbarfinancial.css'
import '../styles/components/components.css'

export default function NavBarFinancial() {
  return (
            <nav >
              <div className='financeiro-card-navbar'>
                <Link to="/liquidezComissaoHomePage">
                  <button >Comissão líquidez</button>
                </Link>
                <Link to="/">
                  <button >Botão</button>
                </Link>
                <Link to="/">
                  <button >Botão</button>
                </Link>
              </div>
            </nav>
  )
}
