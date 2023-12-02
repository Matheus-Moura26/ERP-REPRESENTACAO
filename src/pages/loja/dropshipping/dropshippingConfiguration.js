//IMPORTAR COMPONENTES
  import NavBarLoja from '../../../components/loja/navBarLoja';
  import NavBarLojaCopy from '../../../components/loja/navBarLoja copy';
  import NavBar from "../../../components/navBar";
import React from 'react';

import "../../../styles/components/components.css";

export default function DropshippingConfiguration() {
  return (
    <div className='body'>
      <NavBar/>
      <NavBarLoja/>
      <NavBarLojaCopy/>

    </div>
  )
}
