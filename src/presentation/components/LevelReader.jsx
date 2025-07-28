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
            className={selectedLevel === 'Avanzado' ? 'active-levelReader' : ''}
            onClick={() => setSelectedLevel('Avanzado')}
        >Avanzado</button>
        <button
            className={selectedLevel === 'Intermedio' ? 'active-levelReader' : ''}
            onClick={() => setSelectedLevel('Intermedio')}
        >Intermedio</button>
        <button
            className={selectedLevel === 'Principiante' ? 'active-levelReader' : ''}
            onClick={() => setSelectedLevel('Principiante')}
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
