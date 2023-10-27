import React, { useState, useEffect } from 'react'


import "../styles/pages/energia/cliente.css"
import "../styles/pages/energia/form.css"

export default function Clientes() {
    //CONJUNTO DE CLIENTES
        const [clientes, setClientes] = useState([
            {nome: "Marcos da Rocha", codigo: 1, cnpjOucpf: 70365279196, valorContratado: 785, unidadeConsumidora: 7654582, emAtraso: "pago"},
            {nome: "Júlia Antonia", codigo: 2, cnpjOucpf: 70365279196, valorContratado: 243, unidadeConsumidora: 7654582, emAtraso: "pago"},
            {nome: "Pedro Paulo", codigo: 3, cnpjOucpf: 70365279196, valorContratado: 325, unidadeConsumidora: 7654582, emAtraso: "Em atraso"},
            {nome: "Sampaoli Dalagnoli", codigo: 4, cnpjOucpf: 70365279196, valorContratado: 154, unidadeConsumidora: 7654582, emAtraso: "pago"},
        ]);
    

    //ABRIR OU FECHAR O FORMULÁRIO
        function toggleForm(){
            const elemento = document.querySelector(".form-body-clientes")
            elemento.style.display = "flex"
        }
        function toggleFormX(){
            const elemento = document.querySelector(".form-body-clientes")
            elemento.style.display = "none"
        }
    



    //SALVAR NOVO CLIENTE
        const [formData, setFormData] = useState({
            nome: '',
            codigo: 0,
            cnpjOucpf: Number,
            unidadeConsumidora: Number,
            valorContratado: Number,
            emAtraso: "pago",
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value,
            });
        };
    

        const handleSubmit = async (e) => {
            e.preventDefault();

            let maxCode = 0;
            clientes.forEach((element) => {
            if (element.codigo > maxCode) {
                maxCode = element.codigo+1;
            }
            });
        
            await setFormData({
            ...formData,
            codigo: maxCode + 1,
            });
            console.log(formData);
            await setClientes([...clientes, formData]);
        };
  
  //BOTÃO EDITAR
        const [editar, setEditar] = useState(false)
        function toggleFormEditar() {
            setEditar(!editar)
            }

        const [deletarClienteAviso, setDeletarClienteAviso] = useState(false);
        const [indiceClienteNumero, setIndiceClienteNumero] = useState()
        function deletarCliente(n){
            setDeletarClienteAviso(true)
            setIndiceClienteNumero(n)
        }
        function deletarRealmente() {
            const novoObjeto = clientes.filter((cliente, index) => index !== indiceClienteNumero);
            setClientes(novoObjeto);
            setDeletarClienteAviso(false);
        }
    //EDITAR INFORMAÇÕES DOS CLIENTES
        const [editarClienteCard, setEditarClienteCard] = useState(false)
        function toggleEditarClienteMouseEnter(n){
            setFormData({
                  nome: clientes[n].nome,
                  codigo: clientes[n].codigo,
                  cnpjOucpf: clientes[n].cnpjOucpf,
                  unidadeConsumidora: clientes[n].unidadeConsumidora,
                  valorContratado: clientes[n].valorContratado,
                  emAtraso: clientes[n].emAtraso,
              });
            setIndiceClienteNumero(n)
        }
        function toggleEditarClienteMouseUp(){
           setEditarClienteCard(!editarClienteCard);
        }
        function editarRealmente() {
            clientes[indiceClienteNumero] = formData
            setEditarClienteCard(!editarClienteCard);
        }
        const handleChangeEditar = (e) => {
            const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value,
            });
        };
        
    

  return (

    

    <div className='clientes-body'>
        <div>

        </div>
        {/* FORMULARIO QUE APARECE QUANDO FOR DELETAR CLIENTE */}
            {deletarClienteAviso === true ? ( 
            <div className='deletarCliente-background' onClick={() => setDeletarClienteAviso(false)}>
                    <div className='deletarCliente-card'>
                        <ul className='deletarCliente-ul'>
                            <li className='deletarCliente-li'><h1 id='deletarCliente-h1'>Tem certeza que deseja excluir este cliente?</h1></li>
                            <li className='deletarCliente-li-button'>
                                <button id='deletarCliente-btn-nao' onClick={() => setDeletarClienteAviso(false)}>Não</button>
                                <button id='deletarCliente-btn-sim' onClick={deletarRealmente}>Sim</button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : null} 
        {/* FORMULARIO QUE APARECE AO EDITAR CLIENTE */}
            {editarClienteCard === true? (
                <div className='editarCliente-background' >
                    <div className='editarCliente-card' >
                        <button className='clientes-editarCliente-closeButton' onClick={() => setEditarClienteCard(false)} >X</button>
                        <h2 className='editarCliente-title'>Editar</h2>
                        <div className='editarCliente-content'>
                            <input
                                className='editarCliente-input' 
                                value={formData.nome} 
                                name='nome'
                                onChange={handleChangeEditar}
                             />
                            <label className='editarCliente-label'>Nome</label>
                        </div>

                        <div className='editarCliente-content'>
                            <input 
                                className='editarCliente-input' 
                                value={formData.valorContratado} 
                                name='valorContratado'    
                                onChange={handleChangeEditar}
                            />
                            <label className='editarCliente-label'>Valor Contratado</label>
                        </div>

                        <div className='editarCliente-content'>
                            <input 
                                className='editarCliente-input' 
                                value={formData.cnpjOucpf}
                                name='cnpjOucpf'    
                                type='number'
                                onChange={handleChangeEditar}
                            />
                            <label className='editarCliente-label'>CPF ou CNPJ</label>
                        </div>

                        <div className='editarCliente-content'>
                            <input 
                                className='editarCliente-input' 
                                value={formData.unidadeConsumidora} 
                                name='unidadeConsumidora'  
                                type='number'
                                onChange={handleChangeEditar}

                            />
                            <label className='editarCliente-label'>Unidade Consumidora</label>
                        </div>
                        <div className='editarCliente-content'>
                            <input 
                                className='editarCliente-input' 
                                value={formData.emAtraso} 
                                name='emAtraso'
                                onChange={handleChangeEditar}
                            />
                            <label className='editarCliente-label'>Em atraso</label>
                        </div>
                        <div className='editarCliente-content'>
                            <button type="submit" className="btn-login" onClick={()=> editarRealmente()}>Editar</button>  
                        </div>
                    </div>
                </div>
            ) : null}
        
            

        {/* FORMULARIO PARA CADASTRAR NOVOS CLIENTES */}
            <div className='form-body-clientes' >
                <div className='login-form-card-clientes'>
                    <button className='clientes-adicionarClientes-closeButton' onClick={toggleFormX}>X</button>
                    <h2 id="login-form-title">Cadastrar</h2>
                    <form className='login-form-form' onSubmit={handleSubmit}>
                        <div className="login-form-contextArea">
                        <input
                            className="login-form-input"
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                            <label className="login-form-label" >Nome</label>
                        </div>
                        <div className="login-form-contextArea">
                        <input
                            className="login-form-input"
                            type="number"
                            name="valorContratado"
                            value={formData.valorContratado}
                            onChange={handleChange}
                            required
                        />
                            <label className="login-form-label" >Valor Contratado</label>
                        </div>
                        <div className="login-form-contextArea">
                        <input
                            className="login-form-input"
                            type="number"
                            name="cnpjOucpf"
                            value={formData.cnpjOucpf}
                            onChange={handleChange}
                            required
                        />
                            <label className="login-form-label" >CPF ou CNPJ</label>
                        </div>
                        <div className="login-form-contextArea">
                        <input
                            className="login-form-input"
                            type="number"
                            name="unidadeConsumidora"
                            value={formData.unidadeConsumidora}
                            onChange={handleChange}
                            required
                        />
                            <label className="login-form-label" >Unidade Consumidora</label>
                        </div>
                
                        <div className="login-form-contextArea">
                            <button type="submit" className="btn-login">Concluir</button>  
                        </div>
                    </form>
                </div>
    
            </div>

        {/* TABELA DOS CLIENTES */}
            <div className='clientes-table-card'>
                <div className='clientes-table-buttons-card'>
                    <ul className='clientes-table-buttons-ul'>
                        <li className='clientes-table-buttons-li' onClick={toggleFormEditar}>
                            Editar
                        </li>
                        <li className='clientes-table-buttons-li' onClick={toggleForm}>
                            Adicionar cliente
                        </li>
                    </ul>
                </div>

                <div className='clientes-table-content-card'>
                    <ul className='clientes-table-content-ul'>
                        <li className='clientes-table-content-li'>
                            Nome
                        </li>
                        <li className='clientes-table-content-li-codigo'>
                            Código
                        </li>
                        <li className='clientes-table-content-li'>
                            Valor contratado
                        </li>
                        <li className='clientes-table-content-li'>
                            CPF ou CNPJ
                        </li>
                        <li className='clientes-table-content-li'>
                            Unidade Consumidora
                        </li>
                        <li className='clientes-table-content-li'>
                            Em atraso
                        </li>
                    </ul>
        {/* RENDERIZAÇÃO DOS CLIENTES */}
                </div>
                {
                    clientes.map((cliente, index) => (
                    <div key={cliente.index} className='clientes-cliente-card'>
                        <ul className='clientes-cliente-content-ul'>
                            <li className='clientes-cliente-content-li'>
                                {cliente.nome}
                            </li>
                            <li className='clientes-cliente-content-li-codigo'>
                                {cliente.codigo}
                            </li>
                            <li className='clientes-cliente-content-li'>
                                {cliente.valorContratado} kVh
                            </li>
                            <li className='clientes-cliente-content-li'>
                                {cliente.cnpjOucpf}
                            </li>
                            <li className='clientes-cliente-content-li'>
                                {cliente.unidadeConsumidora}
                            </li>
                            <li className='clientes-cliente-content-li'>
                                {cliente.emAtraso}
                            </li>
                            {editar === true ? (
                                <>
                                    <li className="clientes-cliente-content-btn-excluir" onClick={ () =>deletarCliente(index)}>
                                    x
                                    </li>
                                    <li className="clientes-cliente-content-btn-editar" onMouseUp={ ()=> toggleEditarClienteMouseUp()} onMouseEnter={() => (toggleEditarClienteMouseEnter(index))}>
                                        Editar
                                    </li>
                                </>
                            ) : null}

                        </ul>
                    </div>
                  ) 
                 )
                }

            </div>
    </div>
  )
}
