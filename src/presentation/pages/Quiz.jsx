import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import QuizPage from '../layouts/QuizPage'
import Age from '../components/Age'

import './Quiz.css'

import url from '../../assets/images/quiz/soporte-personalizado.png'

function Quiz() {
  const [changeScreen, setChangeScreen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [fadeClass, setFadeClass] = useState('fade-in');

  const [showAge, setShowAge] = useState(false);

 

  const handleChangeScreen = () =>{
    setChangeScreen(false);
    setShowBtn(true);
    setFadeClass('fade-in');
    setTimeout(() =>{
      setFadeClass('fade-in visible');
    },10)
  }
useEffect(() => {
  const timer = setTimeout(() => {
    setChangeScreen(true);

    // Esperamos un breve momento antes de activar la clase visible
    setTimeout(() => {
      setFadeClass('fade-in visible');
    }, 10); // ~10ms basta para crear un nuevo frame
  }, 3000);

  return () => clearTimeout(timer);
}, []);

const handleAge = () =>{
  setShowAge(true);
}


 


  return (
    <QuizPage>
      <div className='content-quiz' onClick={handleChangeScreen}>
        <div className='imgSoporte-quiz'>
          <img src={url} alt="soporte" id='soporte-quiz'/>
        </div>
        <p style={{color:'#1B3F9A', fontSize:'2rem', textAlign:'center'}}>Vamos a personalizar tu Experiencia</p>
        <p style={{textAlign:'center'}}>Para personalizar tu experiencia haremos una preguntas para conocerte mejor</p>
        {changeScreen && 
          <div className={fadeClass} style={{color:'rgba(60,60,60,0.6)', fontSize:'1.3rem'}}>Toca cualquier parte de la pantalla</div>
        }
        {showBtn &&
          <button id='btn-quiz' className={fadeClass} onClick={handleAge}>Continuar</button>
        }

        {showAge &&
          <div className='age-quiz'>
            <Age></Age>
          </div>
        }
      </div>
    </QuizPage>
  )
}

export default Quiz
