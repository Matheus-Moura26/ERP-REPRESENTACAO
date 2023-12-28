import React from 'react'

import "../../styles/pages/main/cadastro.css"

export default function Cadastro() {
  return (

    <div className='cadastroBody'>
        <div className='cadastro-form-card'>
            <h2 id="cadastro-form-title">Cadastrar</h2>
            <form className='cadastro-form-form'>
                <div className="cadastro-form-contextArea">
                    <input className="input"/>
                    <label className="label" >Email</label>
                </div>
                <div className="cadastro-form-contextArea">
                    <input className="input"/>
                    <label className="label" >Nome</label>
                </div>
                <div className="cadastro-form-contextArea">
                    <input className="input"/>
                    <label className="label" >Senha</label>
                </div>
                
                <div className="cadastro-form-contextArea">
                    <button type="submit" className="btn-login">Concluir</button>  
                </div>
            </form>
        </div>
    </div>

  )
}
