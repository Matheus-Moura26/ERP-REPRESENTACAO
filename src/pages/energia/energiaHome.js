import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from "../../components/navBar";
import NavBarEnergia from '../../components/energia/navBarEnergia';


import "../../styles/components/energia/navBarEnergia.css"
import "../../styles/reset.css"
import "../../styles/pages/energia/home.css"

function Home() {
  return (
    <div className='home-body'>
      <NavBar/>
      <NavBarEnergia />
    </div>
  )
}

export default Home