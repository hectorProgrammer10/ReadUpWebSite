import React, { useEffect, useState } from 'react';
import reload from '../../assets/icons/reload.svg';
import './Admin.css';

import UsuariosPredic from './UsuariosPredic';


function Admin({viewusuarios, viewPredic}) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [adminFake, setAdminFake] = useState(false);
  const [viewUsuariosPredic, setUsuariosPredic] = useState(true);

  const reloadStyle = {
    height: '100%',
    width: '18%',
    objectFit: 'contain',
  };

  const fetchUsuarios = async () => {
  setLoading(true);
  try {
    
    const token = localStorage.getItem('auth_token') || ''; 
    let adminYes = localStorage.getItem('admin_yes');
    if (adminYes == 'yes'){
      setAdmin(true);
    }
    const res = await fetch(import.meta.env.VITE_API_USERS, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      }
    });

    const data = await res.json();
    setUsuarios(data);
    console.log('✅ Usuarios cargados:', data);
  } catch (err) {
    console.log('❌ Error al cargar usuarios:', err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className='seccion_canva'>
      {adminFake &&
        <div style={{color: 'red', fontSize:'9rem'}}>No eres admin, sal de aqui.</div>
      }
      {viewusuarios && 
        <div className='seccion_container2 apartado_pAdmin'>
          <div className="seccion_apartadoW borde2 adminP_fx">
            <h3>Administrador</h3>
          </div>

          <div className="seccion_apartadoW borde2 adminP_fx">
            Usuarios Registrados: {usuarios.length}
            <button className='btn_pAdmin borde2' onClick={fetchUsuarios} disabled={loading}>
              <img src={reload} alt="reload" style={reloadStyle} />
            </button>
          </div>

          <div className="seccion_apartadoW borde2 tabla_proyectos_admin adminP_fx">
            <div className="tablaPadmin">
              <table className='seccion_tabla'>
                <thead>
                  <tr>
                    <th>Usuario:</th>
                    <th>Correo:</th>
                    <th>Edad:</th>
                    <th>Nivel Lector:</th>
                    <th>Rango:</th>
                    <th>Género Sexual:</th>
                    <th>Objetivo:</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((user, index) => (
                    <tr key={index}>
                      <td>{user.nombreUsuario}</td>
                      <td>{user.correo?.valor}</td>
                      <td>{user.edad}</td>
                      <td>{user.nivelLector?.nivel}</td>
                      <td>{user.rango}</td>
                      <td>{user.generoSexual?.genero}</td>
                      <td>{user.objetivoLector}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {usuarios.length === 0 && !loading && (
                <p style={{ padding: '1rem', textAlign: 'center' }}>No hay usuarios registrados.</p>
              )}
            </div>
          </div>
        </div>
      }

      {viewPredic &&
        <UsuariosPredic></UsuariosPredic>
      }
    </div>
  );
}

export default Admin;