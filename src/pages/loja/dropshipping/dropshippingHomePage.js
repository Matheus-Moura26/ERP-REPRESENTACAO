  //IMPORTAR COMPONENTES
      import NavBarLoja from '../../../components/loja/navBarLoja';
      import NavBarLojaCopy from '../../../components/loja/navBarLoja copy';
  //IMPORTAR BIBLIOTECAS OU HOOKS
      import React, { useEffect, useState } from 'react';
  //IMPORTAR DESIGN
      import "../../../styles/components/espacamento.css"
      import "../../../styles/pages/loja/dropshippingHomePage.css"

      

  export default function DropshippingHomePage() {

    const [produtos, setProdutos] = useState([
      {nome: "Óculos Bepantol", marca:"Nike", fornecedor: "ChinesDahora", nicho:"Beleza", dropshipping: true,ativado: true, preco: 13.99, url:"www.asdfjsdafas.com.br"},
      {nome: "Óculos Servilla", marca:"adidas", fornecedor: "Iraniana", nicho:"Beleza", dropshipping: true,ativado: true, preco: 14.99, url:"www.asdfjsdafas.com.br"},
      {nome: "Carrinho de controle remoto", marca:"Mercedes Benz", fornecedor: "Rubens123", nicho:"Brinquedos", dropshipping: false, ativado: false, preco: 15.99, url:"www.asdfjsdafas.com.br"},
    ]);
    //Filtrar produtos
    const [showProdutos, setShowProdutos] = useState([])
    useEffect(()=>{
      setShowProdutos(produtos)
    },[produtos]);

    const [filtrar, setFiltrar] = useState(false)
    
    function handleFiltrar(){
      setFiltrar(!filtrar)
    }
    
    const [itemsDoFiltro, setItemsDoFiltro] = useState([])
    function handleAlterarValorFiltro(nome, valor) {
      // Verifica se o objeto já contém uma propriedade com o mesmo nome
      if (itemsDoFiltro.some(item => Object.keys(item)[0] === nome)) {
        // Remove o elemento com a mesma chave
        const novoObjeto = itemsDoFiltro.filter(item => Object.keys(item)[0] !== nome);
        setItemsDoFiltro([...novoObjeto, { [nome]: valor }]);
      } else {
        // Adiciona o novo elemento diretamente
        setItemsDoFiltro([...itemsDoFiltro, { [nome]: valor }]);
      }
      console.log(itemsDoFiltro)
    }
    
    
    function buscar() {
      console.clear()
      let produtosFiltrados = [];

      produtos.forEach((elemento) => {
        for (const chave in elemento) {
          if (elemento.hasOwnProperty(chave)) {
            const valor = elemento[chave];
            

            itemsDoFiltro.forEach((elem) =>{
              for (const chave1 in elem){
                const valor1 = elem[chave1];
                if(chave === chave1 && valor === valor1){
                  produtosFiltrados.push(elemento)
                  console.log(elemento)
                }
              }
            })

          }
        }
      });


      
      setShowProdutos(produtosFiltrados)
      handleFiltrar();
      setItemsDoFiltro([])
    }
    
    
    
    //Contando quantidade de produtos de dropshipping
    let produtosDropshipping = produtos.filter((item)=> item.dropshipping === true);

    //Cadastramento de produtos
    const [cadastrar, setCadastrar] = useState(false)
    function handleCadastrar(){
      setCadastrar(!cadastrar)
    }

    //Transformar produto em dropshipping
    const [tornarDPSHPStatus, setTornarDPSHPStatus] = useState(false)
    const [dpshpNumber, setDpshpNumber] = useState(0)
    function handleTornarDPSHP(n){
      setTornarDPSHPStatus(!tornarDPSHPStatus)
      setDpshpNumber(n)
    }
    
    function tornarDPSHP(n){
      setProdutos((ProdutoAnterior) => {
        // Create a new array with the updated value at index n
        const produtoAtualizado = ProdutoAnterior.map((produto, index) => {
          if (index === n) {
            // Toggle the 'ativado' property
            return { ...produto, dropshipping: true };
          }
          return produto;
        });
    
        return produtoAtualizado;
      });
      handleTornarDPSHP()
    }
    //Deletar produtos
    const [deletar, setDeletar] = useState(false)
    function handleDeletar(){
      setDeletar(!deletar)
    }
    function deleta(n) {
      const array = produtos.filter((item, index) => index !== n);
      setProdutos(array);
    }

    //Ativar produto ou desativar
    function handleAtivacao(n) {
      setProdutos((ProdutoAnterior) => {
        // Create a new array with the updated value at index n
        const produtoAtualizado = ProdutoAnterior.map((produto, index) => {
          if (index === n) {
            // Toggle the 'ativado' property
            return { ...produto, ativado: !produto.ativado };
          }
          return produto;
        });
    
        return produtoAtualizado;
      });
    }

    //CADASTRAR NOVO PRODUTO
    

    const [formData, setFormData] = useState({
      nome: '',
      marca: '',
      fornecedor: '',
      nicho: '',
      dropshipping: true,
      ativado: true,
      preco: 0,
  });
  function handleAlterarValor(valor, alteracao) {
    setFormData((dadosAnteriores) => ({
      ...dadosAnteriores,
      [valor]: alteracao
    }));
  };



  function handleSalvarProduto(){
      setProdutos([...produtos, formData])
  };
    return (
      <div className='dropshippingHomePage-body'>
          <NavBarLoja/>
          <NavBarLojaCopy/>
          <div className='dropshippingHomePage-content1'>
            {tornarDPSHPStatus === true? 
              <div className='dropshippingHomePage-form-tornarDPSHP-body'>
                <div className='dropshippingHomePage-form-tornarDPSHP-card'>
                  <div className='dropshippingHomePage-form-tornarDPSHP-card-close' onClick={()=>{handleTornarDPSHP()}}>X</div>
                      <label>Tem certeza?</label>
                      <div id='dropshippingHomePage-form-tornarDPSHP-div-btn'>
                        <button onClick={()=>{tornarDPSHP(dpshpNumber)}}>Sim</button>
                        <button onClick={()=>{handleTornarDPSHP()}} >Não</button>
                      </div>
                </div>
              </div>
            :null}
            
            { filtrar === true? 
            <div className='dropshippingHomePage-form-filtrar-body'>
              <div className='dropshippingHomePage-form-filtrar-card'>
                <div className='dropshippingHomePage-form-filtrar-card-close' onClick={handleFiltrar}>X</div>      
                <label>Marca</label>
                <input onChange={(e)=>{handleAlterarValorFiltro("marca",e.target.value)}}/>
              
                <label>Fornecedor</label>
                <input onChange={(e)=>{handleAlterarValorFiltro("fornecedor",e.target.value)}}/>
              
                <label>Nicho</label>
                <input onChange={(e)=>{handleAlterarValorFiltro("nicho",e.target.value)}}/>
              
                <label>Outros</label>
                <select onChange={(e)=>{handleAlterarValorFiltro("outros",e.target.value)}}>
                  <option value=''></option>
                  <option value='dropshipping'>Apenas dropshipping</option>
                  <option value='ativados'>Apenas ativados</option>
                  <option value='desativados'>Desativados</option>
                </select>
              
                <button onClick={buscar} onEnter={buscar}>Buscar</button>
              
              </div>
            </div> :null}
            { cadastrar === true? 
            <div className='dropshippingHomePage-form-cadastroProduto-body'>
              <div className='dropshippingHomePage-form-cadastroProduto-card'>
                <div className='dropshippingHomePage-form-cadastroProduto-card-close' onClick={handleCadastrar}>X</div>
                  <label>Nome</label>
                  <input  onChange={(e)=>{handleAlterarValor("nome",e.target.value)}}/>
                
                  <label>Marca</label>
                  <input onChange={(e)=>{handleAlterarValor("marca",e.target.value)}}/>
                
                  <label>Fornecedor</label>
                  <input onChange={(e)=>{handleAlterarValor("fornecedor",e.target.value)}}/>
                
                  <label>Nicho</label>
                  <input onChange={(e)=>{handleAlterarValor("nicho",e.target.value)}}/>
                
                  <label>Ativado</label>
                  <select onChange={(e)=>{handleAlterarValor("ativado",e.target.value === "true")}}>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                  </select>
                
                  <label>Dropshipping</label>
                  <select onChange={(e)=>{handleAlterarValor("dropshipping",e.target.value === "true")}}>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                  </select>
                
                  <label>Preço</label>
                  <input type='Number' onChange={(e)=>{handleAlterarValor("preco",e.target.value)}}/>
                
                  <label>Url</label>
                  <input  onChange={(e)=>{handleAlterarValor("url",e.target.value)}}/>
                
                  <button onClick={handleSalvarProduto}>Cadastrar</button>
                
              </div>
            </div> :null}
            <div className='dropshippingHomePage-resumo-card'>
              <h3>Total de Produtos: {produtos.length}</h3>
              <h3>Produtos Dropshipping: {produtosDropshipping.length}</h3>
              <h3>Produtos não Dropshipping: {produtos.length-produtosDropshipping.length}</h3>
            </div>
                <div className='dropshippingHomePage-table-tr-addDelete'>
                  <div id='dropshippingHomePage-table-tr-addDelete-th-add-btn' onClick={handleFiltrar}>Filtrar</div>
                  <div id='dropshippingHomePage-table-tr-addDelete-th-add-btn' onClick={handleCadastrar}>Cadastrar</div>
                  <div id='dropshippingHomePage-table-tr-addDelete-th-delete' onClick={handleDeletar}>Excluir</div>
                  <input />
                </div>
            <table>
              <thead>
                <tr>
                  <th>nome</th>
                  <th>marca</th>
                  <th>fornecedor</th>
                  <th>nicho</th>
                  <th>dropshipping</th>
                  <th>preço</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {showProdutos.map((item,index) =>(
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.marca}</td>
                  <td>{item.fornecedor}</td>
                  <td>{item.nicho}</td>
                  <td>{item.dropshipping? "Sim": "Não"}</td>
                  <td>{item.preco}</td>
                  <td><input value={item.url}/></td>
                  {deletar === false && item.dropshipping === true && item.ativado === true? <td id='dropshippingHomePage-btn-desativar' onClick={()=>handleAtivacao(index)}>Desativar</td> : null}
                  {deletar === false && item.dropshipping === true &&item.ativado === false? <td id='dropshippingHomePage-btn-ativar' onClick={()=>handleAtivacao(index)}>Ativar</td>  : null}
                  {deletar === false && item.dropshipping === false ? <td id='dropshippingHomePage-btn-ativar' onClick={()=>{handleTornarDPSHP(index)}}>Tornar DPSHP</td>  : null}
                  {deletar === true? <td id='dropshippingHomePage-btn-desativar' onClick={()=>deleta(index)}>Deletar</td>  : null}
                </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    )
  }
