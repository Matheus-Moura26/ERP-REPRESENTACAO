//import library´s
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

//import style
import '../../styles/pages/comissao.css'

export default function Comissoes() {

  //Seletor de datas  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  //Acessar banco de dados

  const [todasComissoes, setTodasComissoes] = useState([])
  const [comissoesDefinidas, setComissoesDefinidas] = useState([])
  const buscarComissões =  async    (empresa, data) =>{
    //Buscar e salvar comissões em uma variavel
        try{
            const response = await axios.get(
                "http://localhost:3001/buscarTodasComissoes",{headers: {'Content-Type': 'application.json'}   }
            ).then(
                    setTodasComissoes(response.data.resultados),
                    console.log(response.data.resultados
                ))
        }catch(err){
            console.error(`Houve um erro ao solicitar comissões ao banco de dados: ${err}`)
        }
    //Salvar comissoes conforme empresa e data em outra variavel
        todasComissoes.map()
  }


  return (
    <div>
        <ul className='comissoes-filtro-card'>
            <li className='comissoes-filtro-li'>
                <select className='comissoes-filtro-seletor'>
                    <option className='tabelaLiquidez-input-option' value={'todas'} >Todas as Empresas</option>
                    <option className='tabelaLiquidez-input-option' value={'softys'} >Softys</option>
                    <option className='tabelaLiquidez-input-option' value={'emege'}>Emegê</option>
                    <option className='tabelaLiquidez-input-option' value={'roanAlimentos'}>Roan Alimentos</option>
                    <option className='tabelaLiquidez-input-option' value={'doceMineiro'}>Doce Mineiro</option>
                    <option className='tabelaLiquidez-input-option' value={'robsonCruzoe'}>Robson Cruzoé</option>
                    <option className='tabelaLiquidez-input-option' value={'vasconcelos'}>Vasconcelos</option>
                </select>
            </li>
            <li className='comissoes-filtro-li'>
                <DatePicker
                    className='comissoes-filtro-seletor'
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Data de início"
                />
            </li>
            <li className='comissoes-filtro-li'>
                <DatePicker
                    className='comissoes-filtro-seletor'
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="Data de fim"
                />
            </li>
            <li className='comissoes-filtro-li'>
                <button className='comissoes-filtro-btn-verde'>Enviar</button>
            </li>
        </ul>
        
    </div>
  )
}
