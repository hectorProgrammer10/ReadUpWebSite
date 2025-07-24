import React from 'react'
import { useState } from 'react'

import Auth from '../layouts/Auth'

import './Register.css'

import url from "../../assets/images/register/iconogoogle.png"
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleResgister = () => {
    const hasAtSymbol = email.includes('@');

    if (userName !== '' && email !== '' && password !== '') {
      if (!hasAtSymbol) {
        alert("El correo debe contener '@'");
        return;
      }

      if (password.length > 6) {
        navigate('/quiz');
      } else {
        alert("Por favor ingresa una contraseña de al menos 6 dígitos");
      }
    } else {
      alert("Por favor completa todos los campos!");
    }
  };

  const handleLinkLogin = () =>{
    navigate('/login')
  }

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
                      placeholder='Username'
                      value={userName} onChange={(e) => setUserName(e.target.value)}
                       />
                      
                    <input 
                      type="email"
                      placeholder='Email' 
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      />
                    <input 
                      type="password"
                      placeholder='Password' 
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
      
      
                  <div className='signUp-register'>
                    <button id='btnLogin' onClick={handleResgister}>Resgistrate</button>

                    <div class="login-container-register">
                      <p>O Continua con</p>
                      <div class="social-buttons-register">
                        <a href="" class="social-button-register">
                          <img src={url} alt="Google"/>
                        </a>
                      </div>
                    </div>


                    <div className='register-register'>
                      ¿Ya tienes una cuenta?
                      <a href="" id='aRegyster'><strong onClick={handleLinkLogin}>Inicia sesión aqui</strong></a>
                    </div>
                  </div>
                </div>
      </div>
    </Auth>
  )
}

export default Register
