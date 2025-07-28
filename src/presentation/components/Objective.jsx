import React from 'react'
import { useState } from 'react';

import QuizPage from '../layouts/QuizPage'

import './Objective.css'

function Objective({handleSelectObjetive, handleSelectObjetiveSemanal, handleSelectPage, quizComplete}) {
  const [selectedObjetiveLector, setSelectedObjetiveLector] = useState(null);
  const [selectedObjetiveSemanal, setSelectedObjetiveSemanal] = useState(null);

  const [inputFill, setInputFill] = useState(0);

  const objetivoLector = ['Leer más géneros', 'Terminar más libros', 'Desarrollar hábito de lectura',
    'Reducir distracciones', 'Leer clásicos'
  ];
  const objetivoSemanal = ['Leer todos los días', 'Leer 5 días a la semana', 'Leer fines de semana', 
    'Leer 3 días a la semana'
  ];

  const handleContinuar = () =>{
    handleSelectObjetive(selectedObjetiveLector);
    handleSelectObjetiveSemanal(selectedObjetiveSemanal);
    handleSelectPage(inputFill);
    quizComplete();
  }

  return (
    <QuizPage>
      <div className='content-objective'>
        <p className="p1-quiz">
          ¿Cuál es tu objetivo como lector?
        </p>
        <p className="p2-quiz">
          Objetivo lector
        </p>
        <div className='btns-objective'>
          {objetivoLector.map((objetivoLector, index) => (
            <button
              key={index}
              className={selectedObjetiveLector === objetivoLector ? 'active-objetive' : ''}
              onClick={() => setSelectedObjetiveLector(objetivoLector)}
            >
              {`${objetivoLector}`}
            </button>
          ))}
        </div>
        <div>
          <p className="p2-quiz">
            Objetivo semanal
          </p>
          <div className='btns-objective'>
            {objetivoSemanal.map((objetivoSemanal, index) => (
              <button
                key={index}
                className={selectedObjetiveSemanal === objetivoSemanal ? 'active-objetive' : ''}
                onClick={() => setSelectedObjetiveSemanal(objetivoSemanal)}
              >
                {`${objetivoSemanal }`}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="p2-quiz">
            ¿Cuántas páginas deseas leer al día?
          </label>
          <input type="number" id='input-objective' placeholder='Ej. 10' value={inputFill} onChange={(e) => setInputFill(e.target.value)}
          />
        </div>
        <button 
          className={`btn-quiz ${selectedObjetiveLector && selectedObjetiveSemanal && inputFill>0 ? 'btn-enabled' : 'btn-disabled'}`}
          onClick={handleContinuar}
        >Continuar</button>
      </div>
    </QuizPage>
  )
}

export default Objective
