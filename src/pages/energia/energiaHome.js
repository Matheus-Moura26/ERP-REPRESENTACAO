import React from 'react'
import { Link } from 'react-router-dom';
import navBarEnergia from '../../components/navBarEnergia';


import "../../styles/reset.css"
import "../../styles/pages/energia/home.css"

export default function Home() {
  return (
    <div className='home-body'>
      <navBarEnergia />
    </div>
  )
}
