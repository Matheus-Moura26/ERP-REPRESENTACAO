import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "../../styles/pages/main/login.css"

export default function Login() {

    const [users, setUsers] = useState([
        {email: "matheus@gmail.com", senha:"123123"}
    ])

    const [form, setForm] = useState({
        email: "", senha: ""
    })

    function handleChange(e){
        const {name, value} = e.target
        setForm({
            ...form, 
        [name]: value,
        })
    }
    const navigate = useNavigate();
    function  handleLogin(){
        
        console.log("chegou aqui")
        const foundItem = users.find(item => item.email == form.email && item.senha == form.senha)
        if (foundItem) {
            navigate('/lojaHome');
          } else {
            console.log(`
                incorreto
                email correto: ${users[0].email}
                email preenchido: ${form.email}
                senha correto: ${users[0].senha}
                senha preenchida: ${form.senha}
            `)
        } 
    }
  return (
    <div className='loginBody'>

        <div className='login-form-card-clientes'>
            <h2 id="login-form-title">Login</h2>
            <form className='login-form-form'>
                <div className="login-form-contextArea">
                    <input className="input" name='email'  onChange={handleChange}/>
                    <label className="label" >Email</label>
                </div>
                <div className="login-form-contextArea">
                    <input className="input"  name='senha'  onChange={handleChange}/>
                    <label className="label" >Senha</label>
                </div>
                
                <div className="login-form-contextArea">
                <button className="btn-login" onClick={() => handleLogin()}>Concluir</button>

                </div>
            </form>
        </div>
            
    </div>
  )
}
