//import library´s
import React, { useState, useEffect } from 'react';
/* import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; */
import axios from 'axios';
import NavBar from "../../../components/navBar";


//import style
import "../../../styles/components/components.css"
import '../../../styles/pages/representacao/comissao.css'

export default function Comissoes() {

  //Seletor de datas  e empresas
  const [empresaSelecionada, setEmpresaSelecionada] = useState('todas');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleEmpresaChange = (event) => {
    setEmpresaSelecionada(event.target.value);
  };
  const handleStartDateChange = (date) => {
    const data = new Date(date.target.value); // Converte a string em um objeto Date
    setStartDate(data)
  };
  
  
  const handleEndDateChange = (date) => {
    const data = new Date(date.target.value); // Converte a string em um objeto Date
    setEndDate(data)
    
  };

  //Acessar banco de dados
  const [todasComissoes, setTodasComissoes] = useState([])
  const [comissoesDefinidas, setComissoesDefinidas] = useState([])

  // ... outras partes do código

const buscarComissões = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/buscarTodasComissoes",
      { headers: { 'Content-Type': 'application.json' } }
    );
    const comissoesRecebidas = response.data;

    const comissoesFiltradas = comissoesRecebidas.filter((comissao) => {
      const data = new Date(comissao.dataComissao);
      const dataEntrada = new Date(startDate);
      const dataSaida = new Date(endDate);

      if (empresaSelecionada === 'todas') {
        return data >= dataEntrada && data <= dataSaida;
      } else {
        return (
          comissao.empresa === empresaSelecionada &&
          data >= dataEntrada &&
          data <= dataSaida
        );
      }
    });

    setComissoesDefinidas(comissoesFiltradas);
    console.log(comissoesDefinidas)
  } catch (err) {
    console.error(`Houve um erro ao solicitar comissões ao banco de dados: ${err}`);
  }
};

  useEffect(() => {
    // Coloque a lógica que você deseja executar quando `todasComissoes` for atualizado aqui.
    // Neste caso, a tabela será re-renderizada automaticamente quando `todasComissoes` for atualizado.
  }, [comissoesDefinidas]);


  function formatarData(dataComissao) {
    const data = new Date(dataComissao);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  
  
  
  return (
    <div className='body'>
      <NavBar/>
        <ul className='comissoes-filtro-card'>
            <li className='comissoes-filtro-li'>
                <select 
                    className='comissoes-filtro-seletor'
                    value={empresaSelecionada}
                    onChange={handleEmpresaChange} 
                >
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
              <input type='date' onChange={handleStartDateChange} />
              
            </li>
            <li className='comissoes-filtro-li'>
              <input type='date' onChange={handleEndDateChange}/>
              
            </li>
            <li className='comissoes-filtro-li'>
                <button 
                    className='comissoes-filtro-btn-verde'
                    onClick={buscarComissões}
                    >Enviar</button>
            </li>
        </ul>

        <div className='comissoes-tabela-card'>
          <table className='comissoes-table-table'>
            <tbody className='comissoes-table-tbody'>
              <tr className='comissoes-table-tr'>
                <th className='comissoes-table-th'>CLIENTE</th>
                <th className='comissoes-table-th'>EMPRESA</th>
                <th className='comissoes-table-th'>ID PEDIDO</th>
                <th className='comissoes-table-th'>DATA</th>
                <th className='comissoes-table-th'>COMISSÃO LIQUIDA</th>
                <th className='comissoes-table-th'>VALOR TOTAL</th>
              </tr>
              {comissoesDefinidas
                .slice()
                .sort((a, b) => new Date(b.dataComissao) - new Date(a.dataComissao))
                .map((asComissoes, index) => (
                  <tr className='comissoes-table-tr' key={index}>
                    <td className='comissoes-table-td'>{asComissoes.cliente}</td>
                    <td className='comissoes-table-td'>{asComissoes.empresa}</td>
                    <td className='comissoes-table-td'>{asComissoes.idPedido}</td>
                    <td className='comissoes-table-td'>{formatarData(asComissoes.dataComissao)}</td>
                    <td className='comissoes-table-td'>{asComissoes.comissaoLiquida}</td>
                    <td className='comissoes-table-td'>{asComissoes.valorTotal}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        
    </div>
  )
}
