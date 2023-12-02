//import style
import '../../styles/pages/main/main.css';
import { Link } from 'react-router-dom';

import React from 'react'

function Main(){

    return (
        <div id='mainPage-card'>
            <div className='mainPage-card-filtro'></div>
            <div className='mainPage-head'>
                <Link to="/lojaHome">
                    <button id='mainPage-loginBtn'>Login</button>
                </Link>

                <Link>
                    <button id='mainPage-cadastrarBtn'>Cadastrar</button>
                </Link>
            </div>

            <div className='mainPage-card-box'>
                <h2>Procurando o melhor sistema para sua loja? Conheça a software wizard!</h2>
                <p>Automatizamos sua loja de ponta a ponta além de disponibilizarmos uma vasta gama de produtos para você fazer dropshipping</p>
            </div >

            <div className='mainPage-card-box'>
                <h2>Faz dropshipping? reduza tempo e custos com nosso sistema</h2>
                <p>Deixe nosso sistema verificar quais produtos estão disponíveis em seu fornecedor e quais devem ser ocultados por não ter estoque em seus fornecedores.</p>
            </div>

            <div className='mainPage-card-box mainPage-card-box-center'>
                <h2>Integramos o sistema a seu erp, mas lhe adianto que o nosso é melhor</h2>
                <p>Temos um erp prontinho para lhe atender já integrado à nossos outros sistemas, tudo bastante fácil e pratico</p>
            </div>

            <div className='mainPage-card-box mainPage-card-box-center'>
                <h2 className='mainPage-caard-box-h2-up'>Planos</h2>

                <div className='  mainPage-card-box-subBox1'>
                    <h2>Gratuito</h2>
                </div>
                <div className='mainPage-card-box-subBox2'>
                    <h2>Pacote Bussines</h2>
                </div>
                <div className='mainPage-card-box-subBox3'>
                    <h2>Pacote enterprise</h2>
                </div>
            </div>
            
            <div className='mainPage-card-box'>
                <h2>Exemplo de box 2</h2>
            </div>
            <div className='mainPage-card-box'>
                <h2>Exemplo de box 3</h2>
            </div>

            <div className='mainPage-card-box'>
                <h2>Exemplo de box 4</h2>
            </div>

        </div>
    )
}

export default Main