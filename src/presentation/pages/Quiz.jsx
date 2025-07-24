import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import QuizPage from '../layouts/QuizPage'
import Age from '../components/Age'
import Gender from '../components/Gender'
import GenderBooks from '../components/GenderBooks'

import './Quiz.css'

import url from '../../assets/images/quiz/soporte-personalizado.png'

function Quiz() {
  const [changeScreen, setChangeScreen] = useState(false);
  
  const [showBtn, setShowBtn] = useState(false);
  
  
  const [fadeClass, setFadeClass] = useState('fade-in');

  const [showAge, setShowAge] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showGenderBooks, setShowGenderBooks] = useState(false);

 

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
const handleGender = () =>{
  setShowAge(false);
  setShowGender(true);
}
const handleGenderBooks = () =>{
  setShowGender(false);
  setShowGenderBooks(true);
}


 


  return (
    <QuizPage>
      <div className='content-quiz' onClick={handleChangeScreen}>
        <div className='imgSoporte-quiz'>
          <img src={url} alt="soporte" id='soporte-quiz'/>
        </div>
        <p className='p1-quiz'>Vamos a personalizar tu Experiencia</p>
        <p className='p2-quiz'>Para personalizar tu experiencia haremos una preguntas para conocerte mejor</p>
        {changeScreen && 
          <div className={fadeClass} style={{color:'rgba(60,60,60,0.6)', fontSize:'1.3rem'}}>Toca cualquier parte de la pantalla</div>
        }
        {showBtn &&
          <button className={`btn-quiz ${fadeClass}`} onClick={handleAge} >Continuar</button>
        }

        {showAge &&
          <div className='component-quiz'>
            <Age handleGender={handleGender}></Age>
          </div>
        }
        {showGender &&
          <div className='component-quiz'>
            <Gender handleGenderBooks={handleGenderBooks}></Gender>
          </div>
        }
        {showGenderBooks &&
          <div className="component-quiz">
            <GenderBooks></GenderBooks>
          </div>
        }
      </div>
    </QuizPage>
  )
}

export default Quiz
