import React from 'react'
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';


const LogoFreeCode = () => {
  return (
    <div className='freecodecamp-logo-contenedor'>

    <img
    alt='Logo de Free Code Camp'
    src={freeCodeCampLogo}
    className='freecodecamp-logo'
    />

  </div>
  )
}

export default LogoFreeCode