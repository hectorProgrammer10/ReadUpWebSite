import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import QuizPage from '../layouts/QuizPage'
import Age from '../components/Age'
import Gender from '../components/Gender'
import GenderBooks from '../components/GenderBooks'
import LevelReader from '../components/LevelReader'
import Objective from '../components/Objective'

import './Quiz.css'

import url from '../../assets/images/quiz/soporte-personalizado.png'

function Quiz({user, handleRegisterComplete}) {
  const [changeScreen, setChangeScreen] = useState(false);
  
  const [showBtn, setShowBtn] = useState(false);
  
  
  const [fadeClass, setFadeClass] = useState('fade-in');

  const [showAge, setShowAge] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showGenderBooks, setShowGenderBooks] = useState(false);
  const [showLevelReader, setShowLevelReader] = useState(false);
  const [showObjective, setShowObjective] = useState(false);

  // const [temporalDate, setTemporalDate] = useState('')

 

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
const handleSelectAge = (age) =>{
  user.edad = age;
}
const handleGender = () =>{
  setShowAge(false);
  setShowGender(true);
}
const handleSelectGender = (gender) =>{
  user.generoSexual = gender;
}
const handleGenderBooks = () =>{
  setShowGender(false);
  setShowGenderBooks(true);
}
const handleSelectGenderBooks = (genderBooks) =>{
  user.generoFavoritos = genderBooks;
}
const handleLevelReader = () =>{
  setShowGenderBooks(false);
  setShowLevelReader(true);
}
const handleSelectLevelReader = (levelReader) =>{
  user.nivelLector = levelReader;
}
const handleObjective = () =>{
  setShowLevelReader(false);
  setShowObjective(true);
}
const handleSelectObejtive = (objetive) =>{
  user.objetivoLector = objetive;
}
const handleSelectObejtiveSemanal = (objetiveSemanal) =>{
  user.objetivoSemanal = objetiveSemanal;
}
const handleSelectPage = (paginas) =>{
  user.paginasDiarias = paginas;
}

const quizComplete = () =>{
  handleRegisterComplete();
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
            <Age handleGender={handleGender} handleSelectAge={handleSelectAge}></Age>
          </div>
        }
        {showGender &&
          <div className='component-quiz'>
            <Gender handleGenderBooks={handleGenderBooks} handleSelectGender={handleSelectGender}></Gender>
          </div>
        }
        {showGenderBooks &&
          <div className="component-quiz">
            <GenderBooks handleLevelReader={handleLevelReader} handleSelectGenderBooks={handleSelectGenderBooks}></GenderBooks>
          </div>
        }
        {showLevelReader &&
          <div className="component-quiz">
            <LevelReader handleObjective={handleObjective} handleSelectLevelReader={handleSelectLevelReader}></LevelReader>
          </div>
        }
        {showObjective &&
          <div className='component-quiz'>
            <Objective handleSelectObjetive={handleSelectObejtive} handleSelectObjetiveSemanal={handleSelectObejtiveSemanal} handleSelectPage={handleSelectPage} quizComplete={quizComplete}></Objective>
          </div>
        }
      </div>
    </QuizPage>
  )
}

export default Quiz
