import React from 'react'

import './Auth.css'

function Auth({children}) {

  return (
    <div className='estructure-auth'>
      <main>{children}</main>
    </div>
  )
}

export default Auth
