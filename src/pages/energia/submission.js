import { useState } from "react"
import axios from "axios"
import "../../styles/pages/energia/form.css"


function UnidadeConsumidoraCpfSubmission() {

    const [cpf, setCpf] = useState("");
    const [unidadeConsumidora, setUnidadeConsumidora] = useState("");
    const [error, setError] = useState('');
    const [busca, setBusca] = useState('');

    const handleRequisition = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
              "http://localhost:3000/busca",
              JSON.stringify({ cpf, unidadeConsumidora }),
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
          

    }

    return(
      <div className="form-body">
        <div className='login-form-card'>
                  <h2 id="login-form-title">Insira as informações abaixo</h2>
                  <form className='login-form-form'>
                    <div className="login-form-contextArea">
                      <input className="login-form-input" type='cpf' /* placeholder="CPF ou CNPJ" */ name='cpf' required onChange={(e) => setCpf(e.target.value)}/>
                      <label className="login-form-label" >CPF ou CNPJ</label>
                    </div>
                    <div className="login-form-contextArea">
                     <input className="login-form-input" /* placeholder="UNIDADE CONSUMIDORA" */ type='unidadeConsumidora' name='unidadeConsumidora'  required onChange={(e) => setUnidadeConsumidora(e.target.value)}/>
                      <label className="login-form-label" >UNIDADE CONSUMIDORA</label>
                    </div>
                    <div className="login-form-contextArea">
                      <button type="submit" onClick={(e) => handleRequisition(e)} className="btn-login">Buscar</button>  
                    </div>
                  </form>
        </div>
      </div>
    )
};


export default UnidadeConsumidoraCpfSubmission