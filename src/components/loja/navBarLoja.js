import React from 'react'
import { Link } from 'react-router-dom'

import "../../styles/components/loja/navBarLoja.css"


export default function NavBarLoja() {
  return (
    <div className='navBarLoja-card-navbar'>
        <Link  to="/lojaHome">
        <li >Main</li>
        </Link>
        <Link  to="/dropshippingHomePage">
        <li >Dropshipping Tool</li>
        </Link>
        <Link  to="/lojaHome">
        <li>Outro</li>
        </Link>
    </div>
  )
}
