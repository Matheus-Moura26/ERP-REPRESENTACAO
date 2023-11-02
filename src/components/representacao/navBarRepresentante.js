import React from 'react'
import { Link } from 'react-router-dom'

import "../../styles/components/representacao/navBarRepresentante.css"


export default function NavBarRepresentante() {
  return (
    <div className='navBarRepresentante-card-navbar'>
        <Link  to="/representacaoHome">
        <li >Main</li>
        </Link>
        <Link  to="/financialPage">
        <li >Financeiro</li>
        </Link>
        <Link  to="/representacaoHome">
        <li>Outro</li>
        </Link>
    </div>
  )
}
