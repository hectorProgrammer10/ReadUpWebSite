import Auth from "../layouts/Auth";

import fondo from '../../assets/images/index/fondo.jpeg'

import React from 'react'

import './Index.css'

function Index() {
  return (
     <>
      <div className='content-index'>
        <p>Sumergete en tu proxima gran historia</p>
        <div className="btns-index">
          <button id='btn-login' className='btn-index'>
            Iniciar sesión
          </button>
          <button id='btn-logup' className='btn-index'>
            Crear una cuenta
          </button>
        </div>


      </div>
    </>
  )
}

export default Index
