import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'

import HomePage from '../layouts/HomePage'
import PrivacyNoticeSimple from '../components/PrivacyNoticeSimple'
import Index from './Index'

import url2 from '../../assets/icons/logo2.svg';
import qrApp from '../../assets/images/qrcode.png'
import videoApp from '../../assets/videos/video_demo_app_readup.mp4';

function Home() {
  const whatRef = useRef(null);
  const downloadRef = useRef(null);
  const funcRef = useRef(null);
  const indexRef = useRef(null);

  const [usuarios, setUsuarios] = useState([]);

  const token = localStorage.getItem('token_read_up');

  const navigate = useNavigate();


  useEffect(() => {
    const refs = [whatRef, downloadRef, funcRef, indexRef];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach(ref => {
      if (ref.current) {
        ref.current.classList.add('reveal');
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleGetUsuarios = async (event) => {
    // event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_USU, {
          method: 'GET',
          headers: {
            'x-access-token': token,
          },
        });

        const result = await response.json();
        if (response.ok) {
          setUsuarios(result.usuarios || []);
        } else {
          alert("error en la solicitud")
        }
      } catch (error) {
        alert('Error en el servidor');
      }
    };

    fetchData();
  };



  const handleChange = () => {
    navigate('/login');
  }
  const handleChangeCreate = () =>{
    navigate('/register');
  }

  return (
    <HomePage>
      <div className='content-home'>
        <div className='nav-home'>
          <div className='user-home align-left'>
            <img src={url2} alt="logo"/>
          </div>
          <div className='btns-home align-right'>
            <button id='btnRegister-home' className='box5' onClick={handleChangeCreate}>Registrarse</button>
            <button id='btnLogin-home' className='box5' onClick={handleChange}>Iniciar sesión</button>
          </div>
        </div>

        <div className='body-home'>
          <div className='what-home' ref={whatRef}>
            <div className='w1-home align-left'>
              <img src={url2} alt="" />
              <p style={{color:'white', fontSize:'6rem'}}>ReadUp</p>
            </div>
            <div className='w2-home align-right'>
              <p style={{color:'white', fontSize:'4rem'}}>¿Qué es ReadUp?</p>
              <p style={{width:'100%', textAlign:'justify', fontSize:'1.9rem', color:'white'}}> Aplicación móvil que motiva a
                los jóvenes a leer mediante
                retos, seguimiento
                personalizado y comunidad
                lectora. Convierte la lectura en
                una experiencia interactiva y
                divertida.
              </p>
              <strong style={{fontSize:'1.9rem', color:'white'}}>Sube de nivel, un libro a la vez</strong>
            </div>
          </div>

          <div className='download-home' ref={downloadRef}>
            <div className="qr-home align-left">
              <div>
                <p style={{fontSize:'3rem', color:'white'}}>Descarga nuestra App!</p>
              </div>
              <div className='qrImage-home bordee2'>
                <img src={qrApp} alt="qr" />
              </div>
            </div>
            <div className="demo-home align-right">
              <div>
                <p style={{fontSize:'3rem', color:'white'}}>Cómo Funciona ReadUp : <br /> <span style={{fontSize:'2rem', color:'rgba(250,250,250,0.9)'}}>Flujo y Funcionalidades</span></p>
              </div>
              <div className='demoVideo-home bordee2'>
                <video  controls>
                  <source src={videoApp} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>

          <div className='func-home' ref={funcRef}>
            <p style={{fontSize:'6rem', color:'#1B3F9A'}}>Funcionalidades para los usuarios</p>
            <div className='listFunc-home'>
              <ul>
                <li>Registro y personalización del perfil lector</li>
                <li>Lectura digital desde el celular</li>
                <li>Retos, quizzes y logros</li>
              </ul>
              <ul>
                <li>Recomendaciones personalizadas</li>
                <li>Seguimiento de hábitos</li>
              </ul>
            </div>
          </div>

          
        </div>
        <div className='index-home' ref={indexRef}>
          <Index></Index>
        </div>
        <PrivacyNoticeSimple></PrivacyNoticeSimple>

        <div className='footer-home'>
          © {new Date().getFullYear()} 
        </div>
      </div>
    </HomePage>
  )
}

export default Home
