import React from 'react'

import './Login.css'

import url from '../../assets/images/login/fondo2.jpg'

import Auth from '../layouts/Auth'

function Login() {

  return (
    <Auth>
      <div className='content-login'>
          
          <div className="box-auth">
            <div className='body-auth'>
              <div className='welcome-auth'>
                <img id='fondoLogin' src={url} alt="fondoLogin" />
                <div className='titles-auth'>
                  <p id='welcome'>Bienvenido de vuelta</p>
                  <p style={{color:'rgba(30,30,30,0.6)'}}>inicia sesión con tu cuenta</p>
                </div>
              </div>
              <input 
                type="email"
                placeholder='Email' />
              <input 
                type="password"
                placeholder='Password' />
              <a href="/login">¿Olvidaste tu contraseña?</a>
            </div>


            <div className='signIn-login'>
              <button id='btnLogin' onClick={{}}>Iniciar sesión</button>
              <div className='register-login'>
                ¿No tienes una cuenta?
                <a href="/register" id='aRegyster'><strong>Resgistrate aqui</strong></a>
              </div>
            </div>
          </div>
          
      </div>
    </Auth>
  )
}

export default Login
