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
                  <Link  to="/">
                    <li className='navBar-button' id='navBar-button-home'>Home</li>
                  </Link>
                  <Link  to="/financeiro">
                    <li className='navBar-button'>Financeiro</li>
                  </Link>
                  <Link  to="/clientes">
                    <li className='navBar-button'>Clientes</li>
                  </Link>
                  <Link  to="/">
                    <li className='navBar-button'>Pagamentos</li>
                  </Link>
                  <Link  to="/">
                    <li className='navBar-button'>Configurações</li>
                  </Link>
                  {/* <Link  to="/representacaoHome">
                    <li className='navBar-button'>Gestor Representação</li>
                  </Link> */}
                  <Link  to="/lojaHome">
                    <li className='navBar-button'>Gestor Loja</li>
                  </Link>
                  {/* <Link  to="/energiaHome">
                    <li className='navBar-button'>Gestor energético</li>
                  </Link> */}

                  <Link  to="/Logout">
                    <li id='button-logout' className='navBar-button'>Logout</li>
                  </Link>
                </ul>
            </nav>
  )
}
