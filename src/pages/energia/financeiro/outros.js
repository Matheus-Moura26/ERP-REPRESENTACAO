import React from 'react'
import NavBarEnergia from '../../../components/energia/navBarEnergia';
import NavBarEnergiaFinanceiro from '../../../components/energia/navBarEnergiaFinanceiro';
import NavBar from "../../../components/navBar";


//import css
  import "../../../styles/components/espacamento.css"
export default function Outros() {
  return (
    <div className='body-flexEnd'>
        <NavBar/>
        <NavBarEnergia />
        <NavBarEnergiaFinanceiro />
    </div>
  )
}
