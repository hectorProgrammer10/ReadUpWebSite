import React from 'react'

import Auth from '../layouts/Auth'

function Login() {
  return (
    <Auth>
      <div className='content-login'>
        <h2>Sumergete en tu proxima gran historia</h2>
        <div>
          <button id='btn-login' className='btn-login'>
            Iniciar sesión
          </button>
          <button id='btn-logup' className='btn-login'>
            Crear una cuenta
          </button>
        </div>
      </div>
    </Auth>
  )
}

export default Login
