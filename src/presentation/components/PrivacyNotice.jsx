import React from "react";
import "./PrivacyNotice.css";

const PrivacyNotice = () => (
  <section className="privacy-notice">
    <h1>Aviso de Privacidad Integral</h1>

    <p>
      La aplicación móvil <strong>ReadUp</strong> es responsable del tratamiento y protección de sus datos
      personales. Para efectos del presente aviso, se entiende como responsable a la
      persona física o moral que decide sobre el tratamiento de los datos personales.
    </p>

    <h2>¿Qué datos personales recabamos y utilizamos?</h2>
    <p>
      Para las finalidades descritas en este aviso, se tratarán los siguientes datos
      personales: nombre de usuario, correo electrónico, contraseña, historial de
      lectura, recompensas y progreso gamificado, datos de interacción social,
      preferencias de lectura, datos de uso, dirección IP y datos del dispositivo.
    </p>

    <h2>¿Para qué fines utilizamos sus datos personales?</h2>
    <ul>
      <li>Proporcionar acceso a su cuenta de usuario</li>
      <li>Registrar su progreso de lectura y recompensas</li>
      <li>Ofrecer contenido personalizado</li>
      <li>Garantizar la seguridad de la información almacenada</li>
      <li>Analizar datos de uso para mejoras de la app</li>
    </ul>
    <p>
      <em>
        Adicionalmente, utilizaremos su información para fines publicitarios y
        promocionales. En caso de que no desee que sus datos sean tratados para estos
        fines adicionales, puede indicarlo mediante la sección de configuración de
        privacidad de la app.
      </em>
    </p>

    <h2>Transferencia de datos personales</h2>
    <p>
      Sus datos no serán transferidos a terceros sin su consentimiento, salvo
      aquellas excepciones previstas por la Ley Federal de Protección de Datos
      Personales en Posesión de los Particulares.
    </p>

    <h2>Derechos ARCO</h2>
    <p>
      Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué
      los utilizamos (Acceso), a corregirlos (Rectificación), eliminarlos
      (Cancelación) y a oponerse a su uso (Oposición). Puede ejercer estos derechos
      contactándonos al correo <a href="mailto:privacidad@readup.app">privacidad@readup.app</a>.
    </p>

    <h2>Revocación del consentimiento</h2>
    <p>
      Usted puede revocar el consentimiento que nos haya otorgado para el tratamiento
      de sus datos personales enviando un correo a{" "}
      <a href="mailto:privacidad@readup.app">privacidad@readup.app</a>.
    </p>

    <h2>Uso de cookies y tecnologías similares</h2>
    <p>
      La app ReadUp no utiliza cookies en su funcionamiento. Sin embargo, puede hacer
      uso de tecnologías que recolecten información para análisis estadístico anónimo.
    </p>

    <h2>Cambios al aviso de privacidad</h2>
    <p>
      Nos reservamos el derecho de efectuar en cualquier momento modificaciones al
      presente aviso de privacidad. Cualquier cambio será informado a través de la
      aplicación y nuestro sitio web oficial.
    </p>
  </section>
);

export default PrivacyNotice;
