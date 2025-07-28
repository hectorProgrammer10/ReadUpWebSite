import React from 'react'

import reload from '../../assets/icons/reload.svg';
import './Admin.css'

function Admin() {
  const reloadStyle = {
    height: '100%',
    width: '18%',
    objectFit: 'contain',
  };

  return (
    <div className='seccion_canva'>
      <div className='seccion_container2 box3 apartado_pAdmin'>
        <div className="seccion_apartadoW box3 adminP_fx">
          <h3>Administrador</h3>
        </div>
        <div className="seccion_apartadoW box3 adminP_fx">
          Proyectos Registrados: {'3'}
          <button className='btn_pAdmin borde2' onClick={{}}>
            <img src={reload} alt="reload" style={reloadStyle} />
          </button>
        </div>
        <div className="seccion_apartadoW box3 tabla_proyectos_admin adminP_fx">
          <div className="tablaPadmin">
            <table className='seccion_tabla'>
              <thead>
                <tr>
                  <th>Usuario:</th>
                  <th>Nombre del Proyecto:</th>
                  <th className='descripcion_pAdmin'>Descripción:</th>
                  <th>Link de Video:</th>
                  <th>Ficha técnica:</th>
                  <th>Modelo canva:</th>
                  <th>Resumen ejecutivo:</th>
                </tr>
              </thead>
              <tbody>
                <tr key={1}>
                    <td>{'nameUser'}</td>
                    <td>{'proyectoName'}</td>
                    <td>{'descripcion'}</td>
                    <td><div className=''><a className='aTablaPadmin' href={''} target='_blank'>Video</a></div></td>
                    <td>
                      <button 
                        className='aTablaPadmin' 
                        onClick={{}}>
                        Ficha Técnica
                      </button>
                    </td>
                    <td>
                      <button 
                        className='aTablaPadmin' 
                        onClick={{}}>
                        Modelo Canva
                      </button>
                    </td>
                    <td>
                      <button 
                        className='aTablaPadmin' 
                        onClick={{}}>
                        Resumen Ejecutivo
                      </button>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
