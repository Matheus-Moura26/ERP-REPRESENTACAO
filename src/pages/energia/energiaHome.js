import React from 'react'
import { Link } from 'react-router-dom';
import NavBarEnergia from '../../components/energia/navBarEnergia';


import "../../styles/components/energia/navBarEnergia.css"
import "../../styles/reset.css"
import "../../styles/pages/energia/home.css"

function Home() {
  return (
    <div className='home-body'>
      <NavBarEnergia />
    </div>
  )
}

export default Home