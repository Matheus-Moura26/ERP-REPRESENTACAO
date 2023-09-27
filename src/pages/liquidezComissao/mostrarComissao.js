//import library and setings
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//import style
import "../../styles/components/components.css";
import "../../styles/pages/mostrarComissao.css"

export default function MostrarComissao() {

  const [historicos, setHistoricos] = useState([]); // Estado para armazenar os históricos

  const puxarDados = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/buscarTodosHistoricos",
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      // Obtenha os dados da resposta e atualize o estado
      setHistoricos(response.data.resultados);
      console.log(response.data.resultados)
    } catch (error) {
      console.error(error);
    }
  };  

  return (
    <div>
      <div id='mostrarComissao-navBar-financial-card'>
        <button onClick={puxarDados} className='button-financial-1'>
          Todos os pedidos
        </button>
        <Link to="/comissoes">
          <button className='button-financial-1'>
            Comissões
          </button>
        </Link>
      </div>
      
    <table className='mostrarComissao-historico-table'>
        <tbody>
          <tr className='mostrarComissao-historico-linha'>
            <th className='mostrarComissao-historico-celulas'>Cliente</th>
            <th className='mostrarComissao-historico-celulas'>Empresa</th>
            <th className='mostrarComissao-historico-celulas'>Id do pedido</th>
            <th className='mostrarComissao-historico-celulas'>Data</th>
            <th className='mostrarComissao-historico-celulas'>Prazo</th>
            <th className='mostrarComissao-historico-celulas'>Bonificação</th>
            <th className='mostrarComissao-historico-celulas'>Flex</th>
            <th className='mostrarComissao-historico-celulas'>Valor Total</th>
          </tr>
          {historicos
            .slice() // Crie uma cópia do array para não modificar o original
            .sort((a, b) => new Date(b.data) - new Date(a.data)) // Ordene os históricos pela data em ordem decrescente
            .map((historico, index) => (
              <tr className='mostrarComissao-historico-linha' key={index}>
                <td className='mostrarComissao-historico-celulas'>{historico.cliente}</td>
                <td className='mostrarComissao-historico-celulas'>{historico.empresa}</td>
                <td className='mostrarComissao-historico-celulas'>{historico.idPedido}</td>
                <td className='mostrarComissao-historico-celulas'>{historico.data}</td>
                <td className='mostrarComissao-historico-celulas'>{historico.prazo}</td>
                <td className='mostrarComissao-historico-celulas'>{historico.bonificacao}</td>
                <td className='mostrarComissao-historico-celulas'>{historico.flex}</td>
                <td className='mostrarComissao-historico-celulas'>{historico.valorTotal}</td>
              </tr>
            ))
          }
          

        </tbody>
    </table>
  

    </div>
  );
}
