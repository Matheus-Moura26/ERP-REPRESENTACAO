import React from 'react'
import NavBarEnergia from '../../../components/energia/navBarEnergia';
import NavBarEnergiaFinanceiro from '../../../components/energia/navBarEnergiaFinanceiro';

//import css
  import "../../../styles/components/espacamento.css";


export default function ClienteUsinas() {
  return (
    <div className='body-flexEnd'>
        <NavBarEnergia/>
        <NavBarEnergiaFinanceiro/>
    </div>
  )
}
