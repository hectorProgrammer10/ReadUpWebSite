import React from 'react'
import { useState, useRef, useEffect } from 'react';

import QuizPage from '../layouts/QuizPage'

import './Gender.css'

function Gender({handleGenderBooks, handleSelectGender}) {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleContinuar = () =>{
    handleSelectGender(selectedGender);
    handleGenderBooks();
  }

  return (
    <QuizPage>
      <div className='content-gender'>
        <div>
          <div>
            <p className='p1-quiz'>
              ¿Cuál es tu género?
            </p>
            <p className="p2-quiz">
              Solo un par de preguntas mas, ya casi acabamos
            </p>
          </div>
          <div className='btns-gender'>
            <button
              className={selectedGender === 'Masculino' ? 'active-gender' : ''}
              onClick={() => setSelectedGender('masculino')}
            >
              Masculino
            </button>
            <button
              className={selectedGender === 'Femenino' ? 'active-gender' : ''}
              onClick={() => setSelectedGender('femenino')}
            >
              Femenino
            </button>

          </div>
        </div>
        <button 
          disabled={!selectedGender}
          className={`btn-quiz ${selectedGender ? 'btn-enabled' : 'btn-disabled'}`}
          onClick={handleContinuar}
        >Continuar</button>
      </div>
    </QuizPage>
  )
}

export default Gender
