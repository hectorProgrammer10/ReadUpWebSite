import Auth from "../layouts/Auth";

import fondo from '../../assets/images/index/fondo.jpeg'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSound} from '../../hooks/useSound'

import './Index.css'

function Index() {
  const navigate = useNavigate();


  const handleChange = () => {
    navigate('/login');
  }
  const handleChangeCreate = () =>{
    navigate('/register');
  }
  return (
     <>
      <div className='content-index'>
        <p>Sumergete en tu proxima gran historia</p>
        <div className="btns-index">
          <button onClick={handleChange} id='btn-login' className='btn-index'>
            Iniciar sesión
          </button>
          <button onClick={handleChangeCreate} id='btn-logup' className='btn-index'>
            Crear una cuenta
          </button>
        </div>


      </div>
    </>
  )
}

export default Index
