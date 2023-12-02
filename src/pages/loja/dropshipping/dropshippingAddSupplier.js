//IMPORTAR COMPONENTES
  import NavBarLoja from '../../../components/loja/navBarLoja';
  import NavBarLojaCopy from '../../../components/loja/navBarLoja copy';
  import NavBar from "../../../components/navBar";
//IMPORTAR BIBLIOTECAS
  import React, {useState} from 'react';

import "../../../styles/components/espacamento.css";
import "../../../styles/pages/loja/dropshippingSupplier.css";


export default function DropshippingAddSupplier() {

  const [fornecedores, setFornecedores] = useState([
      {nome: "Ricardo", fornecedor: "Rancheiro", nicho: "Alimemntos", dropshipping: false, url: "https://www.rancheiro.com.br/" },
      {nome: "Ricardo", fornecedor: "Rancheiro", nicho: "Alimemntos", dropshipping: false, url: "https://www.rancheiro.com.br/" },
      {nome: "Ricardo", fornecedor: "Rancheiro", nicho: "Alimemntos", dropshipping: false, url: "https://www.rancheiro.com.br/" },
      {nome: "Ricardo", fornecedor: "Rancheiro", nicho: "Alimemntos", dropshipping: false, url: "https://www.rancheiro.com.br/" },
      {nome: "Ricardo", fornecedor: "Rancheiro", nicho: "Alimemntos", dropshipping: false, url: "https://www.rancheiro.com.br/" },
      {nome: "Ricardo", fornecedor: "Rancheiro", nicho: "Alimemntos", dropshipping: false, url: "https://www.rancheiro.com.br/" },
      {nome: "Ricardo", fornecedor: "Rancheiro", nicho: "Alimemntos", dropshipping: false, url: "https://www.rancheiro.com.br/" },
    ])

    const [formData, setFormData] = useState({
      nome: '',
      fornecedor: '',
      nicho: '',
      dropshipping: true,
  });

  function clearData(){
    setFormData({
      nome: '',
      fornecedor: '',
      nicho: '',
      dropshipping: true,
    })
  }
  function handleAlterarValor(valor, alteracao) {
    setFormData((dadosAnteriores) => ({
      ...dadosAnteriores,
      [valor]: alteracao
    }));
  };


  const [cadastrar, setCadastrar] = useState(false)
  function handleCadastrar(){
    setCadastrar(!cadastrar)    
  }

  function handleSalvarFornecedor(){
      setFornecedores([...fornecedores, formData]);
      handleCadastrar();
      clearData()
  };

  //Deletar produtos
    const [deletar, setDeletar] = useState(false)
    function handleDeletar(){
      setDeletar(!deletar)
    }
    function deleta(n) {
      const array = fornecedores.filter((item, index) => index !== n);
      setFornecedores(array);
    }


  return (
    <div className='dropshippingSupplier-body'>
      <NavBar/>
      <NavBarLoja/>
      <NavBarLojaCopy/>

      { cadastrar === true? 
            <div className='dropshippingSupplier-form-cadastroFornecedor-body'>
              <div className='dropshippingSupplier-form-cadastroFornecedor-card'>
                <div className='dropshippingSupplier-form-cadastroFornecedor-card-close' onClick={handleCadastrar}>X</div>
                  <label>Nome</label>
                  <input  onChange={(e)=>{handleAlterarValor("nome",e.target.value)}}/>
                
                  <label>Fornecedor</label>
                  <input onChange={(e)=>{handleAlterarValor("fornecedor",e.target.value)}}/>
                
                  <label>Nicho</label>
                  <input onChange={(e)=>{handleAlterarValor("nicho",e.target.value)}}/>
                
                
                  <label>Dropshipping</label>
                  <select onChange={(e)=>{handleAlterarValor("dropshipping",e.target.value === "true")}}>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                  </select>
                
                  <label>Url</label>
                  <input  onChange={(e)=>{handleAlterarValor("url",e.target.value)}}/>
                
                  <button onClick={handleSalvarFornecedor}>Cadastrar</button>
                
              </div>
            </div> :null}

      <div className='dropshippingSupplier-table-body'>
        <div className='dropshippingSupplier-table-tr-addDelete'>
          <div className='dropshippingSupplier-table-tr-addDelete-buttonsDiv'>
            <div className='dropshippingSupplier-table-tr-addDelete-th-add-btn' onClick={handleCadastrar}>Cadastrar</div>
            <div className='dropshippingSupplier-table-tr-addDelete-th-delete' onClick={handleDeletar}>Excluir</div>
          </div>
          <div className="searchContainer">
              <input type="search" placeholder="Pesquise" name="q" className="search-input" />

              <div className="search-button-card" >
                <i className="search-button-searchbtn">+</i>
              </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>nome</th>
              <th>fornecedor</th>
              <th>nicho</th>
              <th>dropshipping</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
             {fornecedores.map((item,index) =>( 
              <tr  key={index} >
                <td>{ item.nome }</td>
                <td>{ item.fornecedor }</td>
                <td>{ item.nicho }</td>
                <td>{ item.dropshipping? "Sim": "Não" }</td>
                <td><input   value={item.url} /></td>
                {deletar === true? <td id='dropshippingHomePage-btn-desativar' onClick={()=>deleta(index)}>Deletar</td>  : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
