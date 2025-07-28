import React, { useEffect, useState } from 'react';
import reload from '../../assets/icons/reload.svg';
import './Admin.css';

function Admin() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);

  const reloadStyle = {
    height: '100%',
    width: '18%',
    objectFit: 'contain',
  };

  const fetchUsuarios = async () => {
  setLoading(true);
  try {
    
    const token = localStorage.getItem('auth_token') || ''; 
    const adminYes = localStorage.getItem('admin_yes');
    if (adminYes = 'yes'){
      setAdmin(true);
    }
    const res = await fetch(import.meta.env.VITE_API_USERS, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await res.json();
    setUsuarios(data);
    alert('✅ Usuarios cargados:', data);
  } catch (err) {
    alert('❌ Error al cargar usuarios:', err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className='seccion_canva'>
      <div style={{color: 'red', fontSize:'9rem'}}>No eres admin, sal de aqui.</div>
      {admin && 
        <div className='seccion_container2 box3 apartado_pAdmin'>
          <div className="seccion_apartadoW box3 adminP_fx">
            <h3>Administrador</h3>
          </div>

          <div className="seccion_apartadoW box3 adminP_fx">
            Proyectos Registrados: {usuarios.length}
            <button className='btn_pAdmin borde2' onClick={fetchUsuarios} disabled={loading}>
              <img src={reload} alt="reload" style={reloadStyle} />
            </button>
          </div>

          <div className="seccion_apartadoW box3 tabla_proyectos_admin adminP_fx">
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
    </div>
  );
}

export default Admin;