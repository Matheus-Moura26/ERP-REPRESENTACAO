//import style
import '../../../styles/pages/representacao/tabelaLiquidez.css'
import '../../../styles/components/components.css'


//import library and hooks
import React,{useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import InputMask from 'react-input-mask'



export default function AdicionaLiquidez() {
  
  //FUNÇÃO PARA ENVIAR DADOS PARA BANCO DE DADOS
    //Dados
    const { register, handleSubmit, reset, setValue, getValues } = useForm({});
      const [formData, setFormdata] = useState(null)
      const [historicos, setHistoricos] = useState([]);
      
    //Conexão com banco de dados e envio
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            "http://localhost:3001/buscarTodosHistoricos",
            { headers: { 'Content-Type': 'application/json' } }
          );
          setHistoricos(response.data.resultados);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, [formData]);

    const onSubmit = async (data) => {
      
      setFormdata(data);
      try {
        const response = await axios.post(
          "http://localhost:3001/tabelaLiquidez",
          data,
          { headers: { 'Content-Type': 'application/json' } }
        );
        // Adicione o novo histórico à lista existente
          setHistoricos([response.data, ...historicos]);
          // Limpe o formulário
          // Limpe o formulário definindo seus valores como vazios
          Object.keys(getValues()).forEach((key) => {
            setValue(key, '');
          });
      } catch (error) {
        console.log(`Erro ao enviar requisição: ${error}`)
      }
    };


    function formatarData(dataComissao) {
      const data = new Date(dataComissao);
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();
      return `${dia}/${mes}/${ano}`;
    }
  
      // Função para formatar o valor como dinheiro
   // No início do seu componente, após importações
    const formatMoney = (value) => {
      if (value === '') return 'R$ 0,000'; // Lidando com valores vazios
      return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(value)); // Converta para número antes de formatar
    };
      

  return (
    <div className='body'>
        <div className='tabelaLiquidez-title-card'>
            <h1 className='tabelaLiquidez-title-h1'>
                Tabela de liquidez
            </h1>
        </div>
        

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className='tabelaLiquidez-box'>
            <div className='tabelaLiquidez-card'>                
              <label className='tabelaLiquidez-label'>Cliente</label><br/>
              <input className='tabelaLiquidez-input' type='text' required {...register('cliente')}/><br/>
            </div>

            <div className='tabelaLiquidez-card'>                
            <label className='tabelaLiquidez-label'>Empresa</label><br/>
              <select className='tabelaLiquidez-input' type='text' required {...register('empresa') }>
                <option className='tabelaLiquidez-input-option' value={'softys'} >Softys</option>
                <option className='tabelaLiquidez-input-option' value={'emege'}>Emegê</option>
                <option className='tabelaLiquidez-input-option' value={'roanAlimentos'}>Roan Alimentos</option>
                <option className='tabelaLiquidez-input-option' value={'doceMineiro'}>Doce Mineiro</option>
                <option className='tabelaLiquidez-input-option' value={'robsonCruzoe'}>Robson Cruzoé</option>
                <option className='tabelaLiquidez-input-option' value={'vasconcelos'}>Vasconcelos</option>
              </select><br/>
            </div>

            <div className='tabelaLiquidez-card'>                
              <label className='tabelaLiquidez-label'>Id do pedido</label><br/>
              <input className='tabelaLiquidez-input' type='text' required {...register('idPedido')}/><br/>
            </div>

            <div className='tabelaLiquidez-card'>                
              <label className='tabelaLiquidez-label'>Data de faturamento</label><br/>
              <input  className='tabelaLiquidez-input' type='date' required {...register('data')}/><br/>
            </div>

            <div className='tabelaLiquidez-card'>                
              <label className='tabelaLiquidez-label'>Prazo</label><br/>
              <select className='tabelaLiquidez-input' required {...register('prazo')}>
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
            </div>

            <div className='tabelaLiquidez-card'>                
              <label className='tabelaLiquidez-label'>Bonificação</label><br/>
              <input className='tabelaLiquidez-input' type='text'  {...register('bonificacao')}/><br/>
            </div>

            <div className='tabelaLiquidez-card'>                
              <label className='tabelaLiquidez-label'>Flex</label><br/>
              <input className='tabelaLiquidez-input' type='text'  {...register('flex')}/><br/>
            </div>

            <div className='tabelaLiquidez-card'>                
              <label className='tabelaLiquidez-label'>Valor total</label><br/>
              <input className='tabelaLiquidez-input' type='text' required {...register('valorTotal')}/><br/>
            </div>

              <button type='submit' className='btn-verde position-btnSubmit' >Enviar</button>
            </form>

              
            <h2 className='mostrarComissao-historico-title'>Ultimos pedidos adicionados</h2>
            <table className='mostrarComissao-historico-table-'>
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
                        <td className='mostrarComissao-historico-celulas'>{formatarData(historico.data)}</td>
                        <td className='mostrarComissao-historico-celulas'>{historico.prazo}</td>
                        <td className='mostrarComissao-historico-celulas'>{isNaN(parseInt(historico.bonificacao)) ? 0 : formatMoney(Number(parseInt(historico.bonificacao)))}</td>
                        <td className='mostrarComissao-historico-celulas'>{isNaN(parseInt(historico.flex)) ? 0 : formatMoney(Number(parseInt(historico.flex)))}</td>
                        <td className='mostrarComissao-historico-celulas'>{formatMoney(Number(parseInt(historico.valorTotal)))}</td>
                      </tr>
                    ))
                  } 
                </tbody>
            </table>

    </div>
  )
}