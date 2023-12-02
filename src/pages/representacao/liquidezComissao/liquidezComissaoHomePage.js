import React from 'react'
import NavBar from "../../../components/navBar";
import { Link } from 'react-router-dom'
import "../../../styles/components/espacamento.css"

export default function LiquidezComissaoHomePage() {
  return (
    <div className='body'>
        <NavBar/>
      <ul>
        <Link to="/adicionarLiquidez">
          <li className='button-financial-1'>Adicionar Liquidez</li>
        </Link>
        <Link to="/mostrarComissao">
          <li className='button-financial-1'>Mostrar Comissâo</li>
        </Link>
      </ul>
    </div>
  )
}
