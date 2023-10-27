import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';

//import css
  import "../../styles/pages/energia/financeiro.css";

  

export default function Financeiro() {


  //VARIÁVEIS QUE VIRÃO DO BANCO DE DADOS
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

  //FORMATADORES DE VALORES
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
      const formattedValue = Number(Number(value).toFixed(2)); // Keep two decimal places
      // Remove non-numeric characters and parse it back to a number
      return Number(formattedValue); 
    };
  




  //VARIÁVEIS DOS GRÁFICOS
    const [chartDataConsumoInjecao, setChartDataConsumoInjecao] = useState([]);
    const[chartDataInjecaoSaldoArray, setChartDataCustoUnidade] = useState([]);
    const[chartDataConsumoInjecaoEmReais, setChartDataConsumoInjecaoEmReais] = useState([]);
    const[chartDataValorUnitarioEnergia, setChartDataValorUnitarioEnergia] = useState([]);

    useEffect(() => {
      // Converte os dados de leituras no formato adequado para o gráfico
      const chartDataConsumoInjecaoArray = leituras.map((leitura) => [
        faturaFun(leitura.vencimento), // Vencimento formatado
        leitura.consumo,              // Consumo
        leitura.injetada,             // Injeção
      ]);

      const chartDataInjecaoSaldoArray = leituras.map((leitura) => [
        faturaFun(leitura.vencimento),
        leitura.injetada,
        leitura.saldoAcumulado
      ]);

      
      const chartDataConsumoInjecaoEmReaisArray = leituras.map((leitura, index) => [

        faturaFun(leitura.vencimento),
        formatMoney(leitura.consumo * leitura.valorUnitarioConsumo),
        formatMoney(leitura.injetada * leitura.valorUnitarioInjetada),
      ]);
      

      const chartDataValorUnitarioEnergiaArray = leituras.map((leitura) => [
        faturaFun(leitura.vencimento),
        leitura.valorUnitarioConsumo,
        leitura.valorUnitarioInjetada
      ])
 

      // Adiciona o cabeçalho ao início do array
      chartDataConsumoInjecaoArray.unshift(["Data", "Consumo", "Injeção"]);
      chartDataInjecaoSaldoArray.unshift(["Data", "Injeção", "Créditos acumulados"]);
      chartDataConsumoInjecaoEmReaisArray.unshift(["Data", "Consumo", "Geração"])
      chartDataValorUnitarioEnergiaArray.unshift(["Data", "KWH (consumo)", "KWP (geração)"])

      // Define os dados formatados no estado do gráfico
      setChartDataConsumoInjecao(chartDataConsumoInjecaoArray);
      setChartDataCustoUnidade(chartDataInjecaoSaldoArray);
      setChartDataConsumoInjecaoEmReais(chartDataConsumoInjecaoEmReaisArray);
      setChartDataValorUnitarioEnergia(chartDataValorUnitarioEnergiaArray);

    }, [leituras]);



  



  return (
    <div className='financeiro-body'>

      <div className='financeiro-card'>
        <div className='financeiro-card-navbar'>
          <Link to="/financeiro">
            <button >Main</button>
          </Link>
          <Link to="/">
            <button >Clientes e Usinas</button>
          </Link>
          <Link to="/">
            <button >Outros</button>
          </Link>
        </div>
        <div className='financeiro-index-card'>
          <div className='financeiro-index-card-resumo'>
            <h2>Saldo de crédito: {leituras[11].saldoAcumulado}</h2>
            {leituras[11].saldoAcumulado > leituras[10].saldoAcumulado ? (
              <p>{((leituras[11].saldoAcumulado - leituras[10].saldoAcumulado) / leituras[10].saldoAcumulado * 100).toFixed(2)}% de aumento referente ao mês anterior</p>
            ) : (
              <p>{((leituras[11].saldoAcumulado - leituras[10].saldoAcumulado) / leituras[10].saldoAcumulado * 100).toFixed(2)}% de redução referente ao mês anterior</p>
            )}
          </div>
            <div className='financeiro-index-card-resumo'>
              <h2>Energia Gerada: {leituras[11].injetada} KWP</h2>
              {leituras[11].injetada > leituras[10].injetada ? (
                <p>{((leituras[11].injetada - leituras[10].injetada) / leituras[10].injetada * 100).toFixed(2)}% de aumento referente ao mês anterior</p>
              ) : (
                <p>{((leituras[11].injetada - leituras[10].injetada) / leituras[10].injetada * 100).toFixed(2)}% de redução referente ao mês anterior</p>
              )}
            </div>
            <div className='financeiro-index-card-resumo'>
              <h2>Energia Consumida: {leituras[11].consumo} KWH</h2>
              {leituras[11].consumo > leituras[10].consumo ? (
                <p>{((leituras[11].consumo - leituras[10].consumo) / leituras[10].consumo * 100).toFixed(2)}% de aumento referente ao mês anterior</p>
              ) : (
                <p>{((leituras[11].consumo - leituras[10].consumo) / leituras[10].consumo * 100).toFixed(2)}% de redução referente ao mês anterior</p>
              )}
            </div>
        </div>

        <div className='financeiro-index-card'>
        <Chart
              className='leituras-grafico'
              chartType="LineChart"
              width="100.00%"
              height="50vh"
              data={chartDataConsumoInjecao}
              options={{
                title: "Injeção e Consumo em 12 meses",
                curveType: "function",
                series: {
                  1: {color: "#00178a"},
                  2: {color: "#6f87ff"}
                },
                legend: { position: "bottom" },
              }}
            />
            <Chart
              className='leituras-grafico'
              chartType="LineChart"
              width="100.00%"
              height="50vh"
              data={chartDataInjecaoSaldoArray}
              options={{
                title: "Energia injetada x Saldo de crédito",
                curveType: "function",
                series: {
                  1: {color: "#00178a"},
                  2: {color: "#6f87ff"}
                },
                legend: { position: "bottom" },
              }}
            />
        </div>
        <div className='financeiro-index-card'>
        <Chart
          className='leituras-grafico'
          chartType="LineChart"
          width="100.00%"
          height="50vh"
          data={chartDataConsumoInjecaoEmReais}
          options={{
            title: "Energia injetada x Saldo de crédito (Em reais nos últimos 12 months)",
            curveType: "function",
            series: {
              1: { color: "#00178a" },
              2: { color: "#6f87ff" },
            },
            legend: { position: "bottom" },
            hAxis: {format: "currency"},
          }}
          chartLanguage='pt-BR'
        />
            <Chart
              className='leituras-grafico'
              chartType="LineChart"
              width="100.00%"
              height="50vh"
              data={chartDataValorUnitarioEnergia}
              options={{
                title: "Valor do KWP x Valor do KWh (em 12 meses)",
                curveType: "function",
                series: {
                  1: {color: "#00178a"},
                  2: {color: "#6f87ff"},
                },
                legend: { position: "bottom"},
              }}
            />
        </div>
      </div>
    </div>
  )
}
