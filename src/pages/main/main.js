//import style
import '../../styles/pages/main/main.css';
import { Link } from 'react-router-dom';

import React from 'react'

function Main(){

    return (
        <div id='mainPage-card'>
            <div className='mainPage-card-filtro'></div>
            <div className='mainPage-head'>
                <Link /* to="/lojaHome" */ to='/login'>
                    <button id='mainPage-loginBtn'>Login</button>
                </Link>

                <Link to="/cadastro">
                    <button id='mainPage-cadastrarBtn'>Cadastrar</button>
                </Link>
            </div>

            <div className='mainPage-card-box mainPage-card-box-center'>
                <h2>Integramos o sistema a seu erp, mas lhe adianto que o nosso é bem melhor</h2>
                <p>Temos um erp prontinho para lhe atender já integrado à nossos outros sistemas, tudo bastante fácil e prático, integramos fornecedores e gerimos seu estoque assim como gerimos produtos dropshipping, vendas e compras automatizadas, tenha sua empresa trabalhando como um robô e tenha total controle sobre ela na palma de sua mão, veja os indicativos de produtividade de cada funcionário e use nossas Inteligências artificiais para ajuda-lo a gerir tudo isto.</p>
            </div>

            <div className='mainPage-card-box'>
                <h2>Procurando o melhor sistema para sua loja? Conheça a software wizard!</h2>
                <p>Automatizamos sua loja de ponta a ponta além de disponibilizarmos uma vasta gama de produtos para você fazer dropshipping</p>
            </div >

            <div className='mainPage-card-box'>
                <h2>Faz dropshipping? reduza tempo e custos com nosso sistema!</h2>
                <p>Deixe nosso sistema verificar quais produtos estão disponíveis em seu fornecedor e quais devem ser ocultados por não ter estoque em seus fornecedores.</p>
            </div>

            <div className='mainPage-card-box-pacotes'>

                <div className='  mainPage-card-box-subBox1'>
                    <h2>Gratuito</h2>
                    <div className='mainPage-card-box-textArea'>
                        <p>Os primeiros passos para a evolução de seu negócio, começando da melhor forma possível.</p>
                    </div>
                    <div className='mainPage-card-box-subBox-divisoriaArea'>
                        <div className='mainPage-card-box-subBox-divisoria'></div>
                    </div>
                    <div className='mainPage-card-box-subBox-precoArea'>
                        <p id='mainPage-card-box-subBox-precoTitle'>Você paga R$</p><p id='mainPage-card-box-subBox-precoValue'>0,00</p><p id='mainPage-card-box-subBox-precoTitle'>/mês no contrato anual</p>
                    </div>
                    <div className='mainPage-card-box-subBox-divisoriaArea'>
                        <div className='mainPage-card-box-subBox-divisoria'></div>
                    </div>
                    <ul>
                        <li>1 usuário</li>
                        <li>20 MB de dados</li>
                        <li>1 GB de anexos e imagens</li>
                        <li>Acesso ao erp</li>
                        <li>Acesso a plataforma de dropshipping</li>
                        <li>10 produtos de dropshipping</li>
                        <li>1 mês gratuíto</li>
                    </ul>

                    <div className='mainPage-card-box-btnPosition'>
                        <Link to="/productsPage">
                            <button className='mainPage-card-box-saibaMaisBtn'>Saiba mais</button><br></br>
                        </Link>
                        <p id='mainPage-card-box-btnPTag'>ou</p>
                        <button className='mainPage-card-box-comprarAgoraBtn'>Comprar agora</button>
                    </div>
                </div>
                <div className='mainPage-card-box-subBox3'>
                    <h2>Pacote Dealer</h2>
                    <div className='mainPage-card-box-textArea'>
                        <p>Pague seus fornecedores apenas quando receber de seus clientes e não se preocupe com estoque, o produto vai do fornecedor para seu cliente</p>
                    </div>
                    <div className='mainPage-card-box-subBox-divisoriaArea'>
                        <div className='mainPage-card-box-subBox-divisoria'></div>
                    </div>
                    <div className='mainPage-card-box-subBox-precoArea'>
                        <p id='mainPage-card-box-subBox-precoTitle'>Você paga R$</p><p id='mainPage-card-box-subBox-precoValue'>300,00</p><p id='mainPage-card-box-subBox-precoTitle'>/mês no contrato anual</p>
                    </div>
                    <div className='mainPage-card-box-subBox-divisoriaArea'>
                        <div className='mainPage-card-box-subBox-divisoria'></div>
                    </div>
                    <ul>
                        <li>Automação dropshipping</li>
                        <li>5 usuários</li>
                        <li>12 GB de dados</li>
                        <li>produtos dropshipping ilimitados</li>
                        <li>vendas automatizadas</li>
                        <li>Logística automatizadas</li>
                        <li>Acesso a orçamento de logistica</li>
                    </ul>

                    <div className='mainPage-card-box-btnPosition'>
                        <Link to="/productsPage">
                            <button className='mainPage-card-box-saibaMaisBtn'>Saiba mais</button><br></br>
                        </Link>
                        <p id='mainPage-card-box-btnPTag'>ou</p>
                        <button className='mainPage-card-box-comprarAgoraBtn'>Comprar agora</button>
                    </div>
                </div>
                <div className='mainPage-card-box-subBox2'>
                    <h2>Pacote Bussines</h2>
                    <div className='mainPage-card-box-textArea'>
                        <p>Para automatizar processos de sua empresa e ganhar produtividade com o melhor ERP do mercado</p>
                    </div>
                    <div className='mainPage-card-box-subBox-divisoriaArea'>
                        <div className='mainPage-card-box-subBox-divisoria'></div>
                    </div>
                    <div className='mainPage-card-box-subBox-precoArea'>
                        <p id='mainPage-card-box-subBox-precoTitle'>Você paga R$</p><p id='mainPage-card-box-subBox-precoValue'>300,00</p><p id='mainPage-card-box-subBox-precoTitle'>/mês no contrato anual</p>
                    </div>
                    <div className='mainPage-card-box-subBox-divisoriaArea'>
                        <div className='mainPage-card-box-subBox-divisoria'></div>
                    </div>
                    <ul>
                        <li>Acesso ao melhor ERP do mercado</li>
                        <li>5 usuários</li>
                        <li>12 GB de dados</li>
                        <li>Aumente a produtividade de seus funcionários</li>
                        <li>Tenhaem suas mãos um dashboard que mostra o desempenho e produtiviade dos funcionários</li>
                        <li>Logística automatizada</li>
                        <li>Acesso a orçamento de logistica</li>
                    </ul>

                    <div className='mainPage-card-box-btnPosition'>
                        <Link to="/productsPage">
                            <button className='mainPage-card-box-saibaMaisBtn'>Saiba mais</button><br></br>
                        </Link>
                        <p id='mainPage-card-box-btnPTag'>ou</p>
                        <button className='mainPage-card-box-comprarAgoraBtn'>Comprar agora</button>
                    </div>
                </div>
                <div className='mainPage-card-box-subBox4'>
                    <h2>Pacote Enterprise</h2>
                    <div className='mainPage-card-box-textArea'>
                    <p>Tenha acesso a tudo de melhor que podemos oferecer saia a frente de seus concorrentes com nosso sistema inteligente de vendas e compras </p>
                    </div>
                    <div className='mainPage-card-box-subBox-divisoriaArea'>
                        <div className='mainPage-card-box-subBox-divisoria'></div>
                    </div>
                    <div className='mainPage-card-box-subBox-precoArea'>
                        <p id='mainPage-card-box-subBox-precoTitle'>Você paga R$</p><p id='mainPage-card-box-subBox-precoValue'>600,00</p><p id='mainPage-card-box-subBox-precoTitle'>/mês no contrato anual</p>
                    </div>
                    <div className='mainPage-card-box-subBox-divisoriaArea'>
                        <div className='mainPage-card-box-subBox-divisoria'></div>
                    </div>
                    <ul>
                        <li>Acesso ao melhor ERP e unico sistema inteligente de dropshipping</li>
                        <li>10 usuários</li>
                        <li>30 GB de dados</li> 
                        <li>Aumente a produtividade de seus funcionários</li>
                        <li>Acesso ao nosso sistema de dropshipping</li>
                        <li>Logística automatizada</li>
                        <li>Acesso a orçamento de logistica</li>
                    </ul>

                    <div className='mainPage-card-box-btnPosition'>
                        <Link to="/productsPage">
                            <button className='mainPage-card-box-saibaMaisBtn'>Saiba mais</button><br></br>
                        </Link>
                        <p id='mainPage-card-box-btnPTag'>ou</p>
                        <button className='mainPage-card-box-comprarAgoraBtn'>Comprar agora</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main