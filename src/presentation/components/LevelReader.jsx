import React from 'react'
import { useState } from 'react';

import QuizPage from '../layouts/QuizPage'

import './LevelReader.css'

function LevelReader({handleObjective, handleSelectLevelReader}) {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleContinuar = () =>{
    handleSelectLevelReader(selectedLevel);
    handleObjective();
  }
  return (
    <QuizPage>
      <div className="content-levelReader">
        <p className="p1-quiz">
          ¿Cuál es tu nivel de lector?
        </p>
        <div className='btns-levelReader'>
        <button
            className={selectedLevel === 'avanzado' ? 'active-levelReader' : ''}
            onClick={() => setSelectedLevel('avanzado')}
        >Avanzado</button>
        <button
            className={selectedLevel === 'intermedio' ? 'active-levelReader' : ''}
            onClick={() => setSelectedLevel('intermedio')}
        >Intermedio</button>
        <button
            className={selectedLevel === 'principiante' ? 'active-levelReader' : ''}
            onClick={() => setSelectedLevel('principiante')}
        >Principiante</button>
      </div>
      <button 
          disabled={!selectedLevel}
          className={`btn-quiz ${selectedLevel ? 'btn-enabled' : ''}`}
          onClick={handleContinuar}
        >Continuar</button>
      </div>
      
    </QuizPage>
  )
}

export default LevelReader
