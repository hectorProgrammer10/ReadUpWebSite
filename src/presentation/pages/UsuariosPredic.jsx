import React, { useEffect, useState } from 'react'
import './UsuariosPredic.css'

function UsuariosPredic() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('https://readup.zapto.org/predicciones')
      .then((response) => response.json())
      .then((data) => {
        // Convertimos el valor de probabilidad_abandono a número
        const datosFormateados = data.map(item => ({
          id: item.id_usuario,
          usuario: item.nombre,
          probabilidad: parseFloat(item.probabilidad_abandono) / 100  // de "66.00" a 0.66
        }))
        setUsuarios(datosFormateados)
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error)
      })
  }, [])

  return (
    <div className="tabla-container">
      <h2>Predicción de abandono</h2>
      <table className="usuarios-tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Probabilidad de Dejar la App</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.usuario}</td>
              <td className={dato.probabilidad > 0.6 ? 'alto-riesgo' : 'bajo-riesgo'}>
                {(dato.probabilidad * 100).toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsuariosPredic
