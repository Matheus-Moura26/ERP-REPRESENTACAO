import React from 'react'
import { Link } from 'react-router-dom'
import "../../../styles/components/espacamento.css"

export default function LiquidezComissaoHomePage() {
  return (
    <div className='body'>
        
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
