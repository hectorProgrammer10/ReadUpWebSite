import React from 'react'

import Auth from '../layouts/Auth'

import './Register.css'

import url from "../../assets/images/register/iconogoogle.png"

function Register() {
  return (
    <Auth>
      <div className='content-register'>
                <div className="box-auth box-register">
                  <div className='body-auth'>
                    <div className='welcome-auth'>
                      <div className='titles-auth'>
                        <p id='welcome'>Registro</p>
                        <p style={{color:'rgba(30,30,30,0.6)'}}>Crea tu nueva cuenta</p>
                      </div>
                    </div>
                    <input 
                      type="text"
                      placeholder='Username' />
                    <input 
                      type="email"
                      placeholder='Email' />
                    <input 
                      type="password"
                      placeholder='Password' />
                  </div>
      
      
                  <div className='signUp-register'>
                    <button id='btnLogin' onClick={{}}>Resgistrate</button>

                    <div class="login-container-register">
                      <p>O Continua con</p>
                      <div class="social-buttons-register">
                        <a href="#" class="social-button-register">
                          <img src={url} alt="Google"/>
                        </a>
                      </div>
                    </div>


                    <div className='register-register'>
                      ¿Ya tienes una cuenta?
                      <a href="/login" id='aRegyster'><strong>Inicia sesión aqui</strong></a>
                    </div>
                  </div>
                </div>
      </div>
    </Auth>
  )
}

export default Register
