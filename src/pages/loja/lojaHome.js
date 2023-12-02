import React from 'react'
import NavBarLoja from '../../components/loja/navBarLoja';
import NavBar from "../../components/navBar";
import "../../styles/components/espacamento.css";


export default function LojaHome() {
  return (
    <div className='body'>
        <NavBar/>
        <NavBarLoja/>
        <div className='loja-card'>

        </div>
    </div>
  )
}
