//import library and hooks
import React from 'react';
import { Link } from 'react-router-dom';



//import style
import '../styles/components/navbar.css'
import '../styles/components/components.css'

export default function NavBar() {
  return (
            <nav id='navBar-card'>
                <ul>
                    <li className='button'><Link  to="/tabelaLiquidez">Tabela de líquidez</Link></li>
                    <li className='button'><Link  to="/">Botão</Link></li>
                    <li className='button'><Link  to="/">Botão</Link></li>
                </ul>
            </nav>
  )
}
