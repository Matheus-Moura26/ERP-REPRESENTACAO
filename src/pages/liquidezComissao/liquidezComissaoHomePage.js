import React from 'react'
import { Link } from 'react-router-dom'

export default function LiquidezComissaoHomePage() {
  return (
    <div>
        
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
