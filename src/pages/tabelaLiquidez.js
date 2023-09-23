//import style
import '../styles/pages/tabelaLiquidez.css'

import React from 'react'

export default function TabelaLiquidez() {
  return (
    <div>
        <div className='tabelaLiquidez-title-card'>
            <h1 className='tabelaLiquidez-title-h1'>
                Tabela de liquidez
            </h1>
        </div>
        

        <div className='tabelaLiquidez-card'>
            <label className='tabelaLiquidez-label'>Cliente</label><br/>
            <input className='tabelaLiquidez-input' /><br/>

            <label className='tabelaLiquidez-label'>Empresa</label><br/>
            <input className='tabelaLiquidez-input' /><br/>

            <label className='tabelaLiquidez-label'>Data de faturamento</label><br/>
            <input  className='tabelaLiquidez-input' type='date'/><br/>

            <label className='tabelaLiquidez-label'>Prazo</label><br/>
            <select className='tabelaLiquidez-input'>
              <option className='tabelaLiquidez-input-option'>14</option>  
              <option className='tabelaLiquidez-input-option'>21</option>  
              <option className='tabelaLiquidez-input-option'>28</option>  
              <option className='tabelaLiquidez-input-option'>35</option>  
              <option className='tabelaLiquidez-input-option'>14/21/28</option>  
              <option className='tabelaLiquidez-input-option'>21/28/35</option>  
              <option className='tabelaLiquidez-input-option'>14/21/28/35</option>  
            </select><br/>
            

            <label className='tabelaLiquidez-label'>Bonificação</label><br/>
            <input className='tabelaLiquidez-input' type='integer' placeholder='R$ 9.999,99' keyboardType='numeric' /><br/>

            <label className='tabelaLiquidez-label'>Total Flex</label><br/>
            <input className='tabelaLiquidez-input' type='integer' placeholder='R$ 9.999,99' keyboardType='numeric' /><br/>

            <label className='tabelaLiquidez-label'>Valor total</label><br/>
            <input  className='tabelaLiquidez-input' type='number' placeholder='R$ 9.999,99' keyboardType='numeric'/><br/>
            
        </div>
    </div>
  )
}
