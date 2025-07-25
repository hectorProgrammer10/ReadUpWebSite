import React from 'react'

function PrivacyNoticeSimple() {
  return (
    <section className="privacy-notice">
    <h1>Aviso de Privacidad</h1>

    <p>
      <strong>ReadUp</strong> aplicación móvil desarrollada por Héctor Uriel Aguilar Pérez, Daniel de Jesús Hernández Gómez, 
      Ary Manuel Coronado Avendaño, Vinicio Alejandro Portela Esquinca, es responsable del tratamiento de sus datos personales.
    </p>

    <h2>Los datos personales que recabamos se utilizarán para:</h2>
    <ul>
      <li>Crear y gestionar su cuenta de usuario.</li>
      <li>Registrar su progreso de lectura y recompensas.</li>
      <li>Ofrecer recomendaciones personalizadas.</li>
      <li>Mejorar la experiencia dentro de la aplicación. </li>
    </ul>

    <h2>¿Para qué fines utilizamos sus datos personales?</h2>
    <ul>
      <li>Proporcionar acceso a su cuenta de usuario</li>
      <li>Registrar su progreso de lectura y recompensas</li>
      <li>Ofrecer contenido personalizado</li>
      <li>Garantizar la seguridad de la información almacenada</li>
      <li>Analizar datos de uso para mejoras de la app</li>
    </ul>
    
    <p>
      No compartiremos su información con terceros, salvo en los casos previstos por la ley.

      Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO), así como revocar su consentimiento para el tratamiento de datos, 
      enviando un correo a: <a href="mailto:privacidad@readup.app">privacidad@readup.app</a>.

      Para conocer el aviso de privacidad integral, visite:
      <a href="https://readupapp.vercel.app/">https://readupapp.vercel.app/</a>
      
    </p>

  </section>
  )
}

export default PrivacyNoticeSimple
