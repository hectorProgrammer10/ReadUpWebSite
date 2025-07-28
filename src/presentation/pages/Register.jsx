import React from 'react'
import { useState } from 'react'

import Auth from '../layouts/Auth'

import './Register.css'

import url from "../../assets/images/register/iconogoogle.png"
import { useNavigate } from 'react-router-dom'

import { User } from '../../domain/models/userModel'
import { registerUser } from '../../domain/usecases/RegisterUser'

import Quiz from './Quiz'

function Register() {
  const navigate = useNavigate();
  
  const [showQuiz, setShowQuiz] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

 
  const user = new User(
    userName,         // nombreUsuario
    email,         // correo
    password,         // contrasena
    '',         // nivelLector
    0,          // puntuacionTotal
    '',         // rango
    [],         // historialBusqueda
    null,       // edad
    '',         // generoSexual
    [],         // generoFavoritos
    '',         // objetivoLector
    0,          // paginasDiarias
    '',         // objetivoSemanal
    undefined   // id
  );

  const handleRegister = async () => {
    if (!userName || !email || !password) {
      alert("Por favor completa todos los campos!");
      return;
    }

    if (!email.includes('@')) {
      alert("El correo debe contener '@'");
      return;
    }

    if (password.length < 6) {
      alert("Por favor ingresa una contraseña de al menos 6 dígitos");
      return;
    }

    try {
      setIsLoading(true);
      setShowRegister(false);
      setShowQuiz(true);
    } catch (error) {
      alert("Error al registrar: ");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterComplete = async () =>{

    const newUser = user;
    try {
      setIsLoading(true);
      await registerUser(newUser);
      navigate('/');
    } catch (error) {
      alert("Error al registrar: " + error.message);
    } finally {
      setIsLoading(false);
    }
  }


  const handleLinkLogin = () =>{
    navigate('/login')
  }

  return (
    <div>
      {showQuiz && <Quiz user={user} handleRegisterComplete={handleRegisterComplete}></Quiz>}
      {showRegister &&
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
                        <button id='btnLogin' onClick={handleRegister} disabled={isLoading}>
                          {isLoading ? 'Registrando...' : 'Regístrate'}

                        </button>

                        <div className="login-container-register">
                          <p>O Continua con</p>
                          <div className="social-buttons-register">
                            <a href="" className="social-button-register">
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
      }
    </div>
    
  )
}

export default Register
