//import style
import '../styles/pages/tabelaLiquidez.css'
import '../styles/components/components.css'

//import library and hooks
import React,{useState} from 'react'
import {useForm } from 'react-hook-form'
import axios from 'axios'


export default function TabelaLiquidez() {
  
  const { register, handleSubmit } = useForm({})
  const [formData, setFormdata] = useState(null)
  
  const onSubmit = async (data) => {
    setFormdata(data);
    
    try {
      const response = await axios.post(
        "http://localhost:3001/tabelaLiquidez",
        data,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      // Lógica para lidar com a resposta
    } catch (error) {
      if (error?.response) {
        // Lógica para lidar com o erro de resposta do servidor
      } else {
        // Lógica para lidar com outros erros
      }
    }
  };

  return (
    <div>
        <div className='tabelaLiquidez-title-card'>
            <h1 className='tabelaLiquidez-title-h1'>
                Tabela de liquidez
            </h1>
        </div>
        

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className='tabelaLiquidez-card'>
            <label className='tabelaLiquidez-label'>Cliente</label><br/>
            <input className='tabelaLiquidez-input' type='text' {...register('cliente')}/><br/>

            <label className='tabelaLiquidez-label'>Empresa</label><br/>
            <select className='tabelaLiquidez-input' type='text' {...register('empresa')}>
              <option className='tabelaLiquidez-input-option' value={'softys'}>Softys</option>
              <option className='tabelaLiquidez-input-option' value={'emege'}>Emegê</option>
              <option className='tabelaLiquidez-input-option' value={'roanAlimentos'}>Roan Alimentos</option>
              <option className='tabelaLiquidez-input-option' value={'doceMineiro'}>Doce Mineiro</option>
              <option className='tabelaLiquidez-input-option' value={'robsonCruzoe'}>Robson Cruzoé</option>
              <option className='tabelaLiquidez-input-option' value={'vasconcelos'}>Vasconcelos</option>
            </select><br/>

            <label className='tabelaLiquidez-label'>Data de faturamento</label><br/>
            <input  className='tabelaLiquidez-input' type='date' {...register('data')}/><br/>

            <label className='tabelaLiquidez-label'>Prazo</label><br/>
            <select className='tabelaLiquidez-input' {...register('prazo')}>
              <option className='tabelaLiquidez-input-option' value={'aVista'}>A vista</option>  
              <option className='tabelaLiquidez-input-option' value={'7'}>07</option>  
              <option className='tabelaLiquidez-input-option' value={'14'}>14</option>  
              <option className='tabelaLiquidez-input-option' value={'21'}>21</option>  
              <option className='tabelaLiquidez-input-option' value={'28'}>28</option>  
              <option className='tabelaLiquidez-input-option' value={'35'}>35</option>  
              <option className='tabelaLiquidez-input-option' value={'7/14/21'}>07/14/21</option>  
              <option className='tabelaLiquidez-input-option' value={'14/21/28'}>14/21/28</option>  
              <option className='tabelaLiquidez-input-option' value={'21/28/35'}>21/28/35</option>  
              <option className='tabelaLiquidez-input-option' value={'30/45/60'}>30/45/60</option>  
              <option className='tabelaLiquidez-input-option' value={'14/21/28/35'}>14/21/28/35</option>
            </select><br/>
            

            <label className='tabelaLiquidez-label'>Bonificação</label><br/>
            <input className='tabelaLiquidez-input' type='text' {...register('bonificacao')}/><br/>

            <label className='tabelaLiquidez-label'>Flex</label><br/>
            <input className='tabelaLiquidez-input' type='text' {...register('flex')}/><br/>

            <label className='tabelaLiquidez-label'>Valor total</label><br/>
            <input className='tabelaLiquidez-input' type='text' {...register('valorTotal')}/><br/>

                <button type='submit' className='btn-verde'>Enviar</button>
            </form>

            <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}
