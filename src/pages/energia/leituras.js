import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import NavBarEnergia from '../../components/energia/navBarEnergia';


import "../../styles/components/energia/navBarEnergia.css"
import "../../styles/pages/energia/leituras.css"




export default function Leituras() {
  const [leituras, setLeituras] = useState([
    {PeriodoLeituraInicio: new Date("2023-08-09"), PeriodoLeituraFinal: new Date("2023-09-11"), consumo: 9593, injetada: 6326, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2023-09-23"), saldoAcumulado:3267 ,},
    {PeriodoLeituraInicio: new Date("2023-09-09"), PeriodoLeituraFinal: new Date("2023-10-11"), consumo: 10000, injetada: 7000, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2023-10-23"), saldoAcumulado: 6534 ,},
    {PeriodoLeituraInicio: new Date("2023-10-09"), PeriodoLeituraFinal: new Date("2023-11-11"), consumo: 9593, injetada: 6326, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2023-11-23"), saldoAcumulado: 9801,},
    {PeriodoLeituraInicio: new Date("2023-11-09"), PeriodoLeituraFinal: new Date("2023-12-11"), consumo: 8756, injetada: 6543, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2023-12-23"), saldoAcumulado: 13068,},
    {PeriodoLeituraInicio: new Date("2023-12-09"), PeriodoLeituraFinal: new Date("2024-01-11"), consumo: 7985, injetada: 7598, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2024-01-23"), saldoAcumulado: 16335,},
    {PeriodoLeituraInicio: new Date("2024-01-09"), PeriodoLeituraFinal: new Date("2024-02-11"), consumo: 9593, injetada: 6326, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2024-02-23"), saldoAcumulado: 19602,},
    {PeriodoLeituraInicio: new Date("2024-02-09"), PeriodoLeituraFinal: new Date("2024-03-11"), consumo: 10000, injetada: 6326, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2024-03-23"), saldoAcumulado: 22869,},
    {PeriodoLeituraInicio: new Date("2024-03-09"), PeriodoLeituraFinal: new Date("2024-04-11"), consumo: 11235, injetada: 8745, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2024-04-23"), saldoAcumulado: 26136,},
    {PeriodoLeituraInicio: new Date("2024-04-09"), PeriodoLeituraFinal: new Date("2024-05-11"), consumo: 9593, injetada: 6326, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2024-05-23"), saldoAcumulado: 29403,},
    {PeriodoLeituraInicio: new Date("2024-05-09"), PeriodoLeituraFinal: new Date("2024-06-11"), consumo: 9593, injetada: 6326, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2024-06-23"), saldoAcumulado: 32670,},
    {PeriodoLeituraInicio: new Date("2024-06-09"), PeriodoLeituraFinal: new Date("2024-07-11"), consumo: 9593, injetada: 6326, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2024-07-23"), saldoAcumulado: 35937,},
    {PeriodoLeituraInicio: new Date("2024-07-09"), PeriodoLeituraFinal: new Date("2024-08-11"), consumo: 9593, injetada: 6326, valorUnitarioConsumo: 0.8897, valorUnitarioInjetada: 0.8897, vencimento: new Date("2024-08-23"), saldoAcumulado: 39204,},
  ]);
  const leiturasTamanho = leituras.length
  const [clientes, setClientes] = useState(
    {nome: "Eduardo Carvalho Alencar", grupo: "GRUPO B" , rua: "Mansões Fz Mata da Anta", numero: "CH 28", bairro: "Vila Patricia, Lago Sul", cep: 71680620, cidade: "Brasília", estado: "DF" }
  )

  //Formatar Data
    function formatarData(value) {
      const data = new Date(value);
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();
      return `${dia}/${mes}/${ano}`;
    }
    function faturaFun(value){
      const data = new Date(value);
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();
      return `${mes}/${ano}`;
    }

    const formatMoney = (value) => {
      if (value === '') return 'R$ 0,000'; // Lidando com valores vazios
      return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(value)); // Converta para número antes de formatar
    };


    //PARTE DO GRAFICO
    
    const [chartDataConsumoInjecao, setChartDataConsumoInjecao] = useState([]);
    const[chartDataCustoUnidade, setChartDataCustoUnidade] = useState([]);

  useEffect(() => {
    // Converte os dados de leituras no formato adequado para o gráfico
    const chartDataConsumoInjecaoArray = leituras.map((leitura) => [
      faturaFun(leitura.vencimento), // Vencimento formatado
      leitura.consumo,              // Consumo
      leitura.injetada,             // Injeção
    ]);

    const chartDataCustoUnidadeArray = leituras.map((leitura) => [
      faturaFun(leitura.vencimento),
      leitura.valorUnitarioConsumo,
      leitura.valorUnitarioInjetada
    ]);

    // Adiciona o cabeçalho ao início do array
    chartDataConsumoInjecaoArray.unshift(["Data", "Consumo", "Injeção"]);
    chartDataCustoUnidadeArray.unshift(["Data", "Consumo", "Injeção"]);

    // Define os dados formatados no estado do gráfico
    setChartDataConsumoInjecao(chartDataConsumoInjecaoArray);
    setChartDataCustoUnidade(chartDataCustoUnidadeArray)
  }, [leituras]);

    
    const options = {
      title: "Consumo e Injeção dos ultimos 12 meses",
      curveType: "function",
      series: {
        1: {color: "#00178a"},
        2: {color: "#6f87ff"}
      },
      legend: { position: "bottom" },
    };
    const options2 = {
      title: "Custo do KWH nos ultimos 12 meses",
      curveType: "function",
      series: {
        1: {color: "#00178a"},
        2: {color: "#6f87ff"}
      },
      legend: { position: "bottom" },
    };


    console.log(chartDataConsumoInjecao)
    console.log(chartDataCustoUnidade)

  return (
    <div className='leituras-body'>
      <NavBarEnergia />
          { /* 1- Primeiro um card com o cliente, endereço data da leitura assim como vencimento */}
          <div className='leituras-totalCard'>
              <div className='leituras-PrimeiroCard-cliente'>

                <div className='leituras-PrimeiroCard-cliente-Card1'>
                  <h2 className='leituras-PrimeiroCard-cliente-Card1-fontes'>Cliente</h2>
                  <p className='leituras-PrimeiroCard-cliente-Card1-fontes'>{clientes.nome}</p>
                  <p className='leituras-PrimeiroCard-cliente-Card1-fontes'>{clientes.rua}</p>
                  <p className='leituras-PrimeiroCard-cliente-Card1-fontes'>{clientes.bairro}</p>
                  <p className='leituras-PrimeiroCard-cliente-Card1-fontes'>{clientes.cep}</p>
                  <p className='leituras-PrimeiroCard-cliente-Card1-fontes'>{clientes.cidade} {clientes.estado}</p>
                </div>

                <div className='leituras-PrimeiroCard-cliente-Card2'>
                  <p className='leituras-PrimeiroCard-cliente-Card2-fontes'>Leitura atual - ???</p>
                  <p className='leituras-PrimeiroCard-cliente-Card2-fontes'>Leitura anterior - ???</p>
                  <p className='leituras-PrimeiroCard-cliente-Card2-fontes'>vencimento: {formatarData(leituras[leiturasTamanho-1].vencimento)}</p>
                  <p className='leituras-PrimeiroCard-cliente-Card2-fontes'>Fatura: {faturaFun(leituras[leiturasTamanho-1].vencimento)}</p>
                </div>

              </div>
              {/* 2- Depois um card com os valores descritivos de valor injetado e consumido assim como o valor do kWH e o valor total
                do mês assim como o saldo e a economia... */}
              <div className='leituras-segundoCard-leitura'>
                <h4>PERÍODO DA LEITURA</h4>
                <p>{`${formatarData(leituras[leiturasTamanho-1].PeriodoLeituraInicio)} À ${formatarData(leituras[leiturasTamanho-1].PeriodoLeituraFinal)}`}</p>

                <table className='leituras-segundoCard-leitura-tabela'>
                  <thead className='leituras-segundoCard-leitura-tabela-cabeca'>
                    <tr className='leituras-segundoCard-leitura-tabela-linhasArea'>
                      <th className='leituras-segundoCard-leitura-tabela-celula'>DESCRIÇÃO</th>
                      <th className='leituras-segundoCard-leitura-tabela-celula'>VALOR UNITÁRIO</th>
                      <th className='leituras-segundoCard-leitura-tabela-celula'>KWH</th>
                      <th className='leituras-segundoCard-leitura-tabela-celula'>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody className='leituras-segundoCard-leitura-tabela-corpo'>
                    <tr className='leituras-segundoCard-leitura-tabela-linhasArea'>
                      <td className='leituras-segundoCard-leitura-tabela-celula'>CONSUMO</td>
                      <td className='leituras-segundoCard-leitura-tabela-celula'>{leituras[leiturasTamanho-1].valorUnitarioConsumo}</td>
                      <td className='leituras-segundoCard-leitura-tabela-celula'>{leituras[leiturasTamanho-1].consumo}</td>
                      <td className='leituras-segundoCard-leitura-tabela-celula'>{formatMoney(leituras[leiturasTamanho-1].valorUnitarioConsumo*leituras[leiturasTamanho-1].consumo)}</td>
                    </tr>
                    <tr className='leituras-segundoCard-leitura-tabela-linhasArea'>
                      <td className='leituras-segundoCard-leitura-tabela-celula'>ENERGIA INJETADA</td>
                      <td className='leituras-segundoCard-leitura-tabela-celula'>{leituras[leiturasTamanho-1].valorUnitarioInjetada}</td>
                      <td className='leituras-segundoCard-leitura-tabela-celula'>{leituras[leiturasTamanho-1].injetada}</td>
                      <td className='leituras-segundoCard-leitura-tabela-celula'>{formatMoney(leituras[leiturasTamanho-1].valorUnitarioInjetada*leituras[leiturasTamanho-1].injetada)}</td>
                    </tr>
                  </tbody>
                </table>

                <div className='leituras-segundoCard-leitura-finalTabela'>
                  <p>"Total: "</p><p>{formatMoney(leituras[leiturasTamanho-1].valorUnitarioConsumo*leituras[leiturasTamanho-1].consumo-leituras[leiturasTamanho-1].valorUnitarioInjetada*leituras[leiturasTamanho-1].injetada)}</p>
                </div>

                <div className='leituras-segundoCard-leitura-finalTabela'>
                  <p>"Desconto 15%: "</p>
                  <p>{formatMoney(leituras[leiturasTamanho-1].valorUnitarioInjetada*leituras[leiturasTamanho-1].injetada*15/100)}</p>
                </div>

                <div className='leituras-segundoCard-leitura-finalTabela'>
                  <p>"Valor Total a Pagar: "</p>
                  <p>{formatMoney(leituras[leiturasTamanho-1].valorUnitarioInjetada*leituras[leiturasTamanho-1].injetada*85/100)}</p>
                </div>

                <p>Neste mês sua economia foi de: {formatMoney(leituras[leiturasTamanho-1].valorUnitarioInjetada*leituras[leiturasTamanho-1].injetada*15/100)}</p>
                <div className='leituras-segundoCard-leitura-finalTabela2'>
                  <div>
                    <h2>INFORME DE GERAÇÃO</h2>
                  </div>
                  <p>Período de refêrencia para apuração {faturaFun(leituras[leiturasTamanho-1].vencimento)}</p>
                  <p>Saldo acumulado de {leituras[leiturasTamanho-1].saldoAcumulado} créditos</p>
                </div>
              </div>
          </div>
        

          

         {/*  3- após isto um gráfico mostrando o consumo, a injeção e o preço do KWH de injeção e de consumo dos ultimos 12 meses */ }
          <div className='leituras-grafico-body'>
            <Chart
              className='leituras-grafico'
              chartType="LineChart"
              width="89.448%"
              height="50vh"
              data={chartDataConsumoInjecao}
              options={options}
            />
            <Chart
              className='leituras-grafico'
              chartType="LineChart"
              width="89.448%"
              height="50vh"
              data={chartDataCustoUnidade}
              options={options2}
            />
          </div>
          

          {/*  4- Após isto uma tabela assim como a tabela do passo 2 no entanto para os últimos 12 meses  */}

          <div className='leituras-ultimoCard-body'>
            <table className='leituras-ultimoCard-tabela'>
              <thead className='leituras-ultimoCard-tabela-cabeca'>
                <tr className='leituras-ultimoCard-tabela-linhaPrimaria'>
                  <th className='leituras-ultimoCard-tabela-celulaSecundaria'>Data</th>
                    <tr className='leituras-ultimoCard-tabela-linhaSecundaria'>
                      <th className='leituras-ultimoCard-tabela-celulaSecundaria'><p>DESCRIÇÃO</p></th>
                      <th className='leituras-ultimoCard-tabela-celulaSecundaria'><p>VALOR UNITÁRIO</p></th>
                      <th className='leituras-ultimoCard-tabela-celulaSecundaria'><p>KWH</p></th>
                      <th className='leituras-ultimoCard-tabela-celulaSecundaria'><p>TOTAL</p></th>
                    </tr>
                </tr>
              </thead>
              <tbody className='leituras-ultimoCard-tabela-corpo'>
                {leituras.map((leitura) =>(
                  <tr className='leituras-ultimoCard-tabela-linhaPrimaria'>
                   <td className='leituras-ultimoCard-tabela-celulaSecundaria'>{faturaFun(leitura.vencimento)}</td>
                      <tr className='leituras-ultimoCard-tabela-linhaSecundaria'>
                      <td className='leituras-ultimoCard-tabela-celulaSecundaria'>CONSUMO</td>
                      <td className='leituras-ultimoCard-tabela-celulaSecundaria'>{leitura.valorUnitarioConsumo}</td>
                      <td className='leituras-ultimoCard-tabela-celulaSecundaria'>{leitura.consumo}</td>
                      <td className='leituras-ultimoCard-tabela-celulaSecundaria'>{formatMoney(leitura.valorUnitarioConsumo*leitura.consumo)}</td>
                    </tr>
                    <tr className='leituras-ultimoCard-tabela-linhaSecundaria'>
                      <td className='leituras-ultimoCard-tabela-celulaSecundaria'>ENERGIA INJETADA</td>
                      <td className='leituras-ultimoCard-tabela-celulaSecundaria'>{leitura.valorUnitarioInjetada}</td>
                      <td className='leituras-ultimoCard-tabela-celulaSecundaria'>{leitura.injetada}</td>
                      <td className='leituras-ultimoCard-tabela-celulaSecundaria'>{formatMoney(leitura.valorUnitarioInjetada*leitura.injetada)}</td>
                    </tr>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>

    </div>
  )
}