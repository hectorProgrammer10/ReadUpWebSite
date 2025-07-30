
import React, { useState } from 'react';
import './Login.css';
import url from '../../assets/images/login/fondo2.jpg';
import Auth from '../layouts/Auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLinkRegister = () => {
    navigate('/register');
  };

  const handleLogin = async () => {

    try {
      const res = await fetch(import.meta.env.VITE_API_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        correo: email,
        contraseña: password
      })

      });

      const data = await res.json();

      if (res.ok) {
        console.log('✅ Login exitoso:', data);
        localStorage.setItem('auth_token', data.token);
        sessionStorage.setItem('sesion', 'yes'); 
        if(email == 'admin@dev.com'){
          localStorage.setItem('admin_yes', 'yes');
          navigate('/');
        }
        else{
          navigate('/');
        }
      } else {
        alert('❌ Error en login:', data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      alert('❌ Error inesperado:', error.message);
    }
  };

  return (
    <Auth>
      <div className='content-login'>
        <div className="box-auth">
          <div className='body-auth'>
            <div className='welcome-auth'>
              <img id='fondoLogin' src={url} alt="fondoLogin" />
              <div className='titles-auth'>
                <p id='welcome'>Bienvenido de vuelta</p>
                <p style={{ color: 'rgba(30,30,30,0.6)' }}>inicia sesión con tu cuenta</p>
              </div>
            </div>

            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="/login">¿Olvidaste tu contraseña?</a>
          </div>

          <div className='signIn-login'>
            <button id='btnLogin' onClick={handleLogin}>Iniciar sesión</button>
            <div className='register-login'>
              ¿No tienes una cuenta?
              <a href="#" id='aRegyster'><strong onClick={handleLinkRegister}>Resgistrate aquí</strong></a>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  );
}

export default Login;