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
                  <Link  to="/financialPage">
                    <li className='button'>Financeiro</li>
                  </Link>
                  <Link  to="/">
                    <li className='button'>Botão</li>
                  </Link>
                  <Link  to="/">
                    <li className='button'>Botão</li>
                  </Link>
                </ul>
            </nav>
  )
}
