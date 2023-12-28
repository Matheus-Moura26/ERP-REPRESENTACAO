import React, {useState} from 'react'

//import icons
import { FaCheck} from 'react-icons/fa';
import { TiDelete } from "react-icons/ti";
//css
import "../../../../styles/pages/loja/productsPage.css"
export default function ProductsPage() {



  return (
    <div className='productsPage-Body'>
        <div className='planosNameCard'>
            <div className='planosName'>
                Gratuito
            </div>
            <div className='planosName'>
                Pacote Dealer
            </div>
            <div className='planosName'>
                Pacote Bussines
            </div>
            <div className='planosName'>
                Pacote Enterprise
            </div>
        </div>
        <div className='tabelaArea'>{/* Aqui é a div que colocará os itens em linha as divs filhas serão colocadas em colunas para os ítens e o checkbox indicando se o plano tem ou não */}
            <div className='planosBeneficios'>{/* Esta div ficará presente as características de cada plano e o que ele tem de disponível */}
                <div>usuário</div>
                <div>Armazenamento</div>
                <div>Armazenamento de imagens</div>
                <div>Acesso ao melhor ERP do mercado</div>
                <div>Acesso a plataforma de dropshipping</div>
                <div>produtos de dropshipping</div>
                <div>Automação dropshipping</div>
                <div>vendas automatizadas</div>
                <div>Logística automatizadas</div>
                <div>Acesso a orçamento de logistica</div>
                <div>Sistema 100% na núvem</div>
                <div>Emissão de notas fiscais</div>
                <div>Cobrança com emissão de boletos</div>
                <div>Cobrança via link de pagamento</div>
                <div>Gestão financeira completa</div>
                <div>Fluxo de caixa</div>
                <div>Gestão completa de estoque</div>
                <div>Integração com lojas virtuais e marketplaces</div>
            </div>
            <div className='verificacaoPorClienteArea'>
                <div className='verificacaoPorCliente'> {/* Aqui está os Checkboxes do primeiro plano */}
                    <div>1</div>
                    <div>20 MB</div>
                    <div>1 GB</div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div>10</div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <button className='comprarBtn'>Comprar agora</button>
                </div>
                <div className='verificacaoPorCliente'> {/* Aqui está os Checkboxes do Segundo plano */}
                    <div>5</div>
                    <div>12 GB</div>
                    <div>1 GB</div>
                    <div><TiDelete /></div>
                    <div><FaCheck /></div>
                    <div>Ilimitado</div>
                    <div><TiDelete /></div>
                    <div><TiDelete /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <button className='comprarBtn'>Comprar agora</button>
                </div>
                <div className='verificacaoPorCliente'> {/* Aqui está os Checkboxes do Terceiro plano */}
                    <div>5</div>
                    <div>12 GB</div>
                    <div>12 GB</div>
                    <div><FaCheck /></div>
                    <div><TiDelete /></div>
                    <div>Ilimitado</div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <button className='comprarBtn'>Comprar agora</button>
                </div>
                <div className='verificacaoPorCliente'> {/* Aqui está os Checkboxes do Quarto plano */}
                    <div>10</div>
                    <div>30 GB</div>
                    <div>30 GB'</div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div>Ilimitado</div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <div><FaCheck /></div>
                    <button className='comprarBtn'>Comprar agora</button>
                </div>
            </div>
        </div>
    </div>
  )
}
