import React, { useState } from 'react';
import QuizPage from '../layouts/QuizPage';
import './GenderBooks.css';

function GenderBooks({handleLevelReader, handleSelectGenderBooks}) {
  const genders = [
    'Fantasía', 'Ciencia ficción', 'Romance', 'Misterio', 'Terror', 'Aventura',
    'Drama', 'Histórico', 'Biografía', 'Poesía', 'Autoayuda', 'Comedia'
  ];

  const [selectedGenders, setSelectedGenders] = useState([]);

  const toggleGender = (gender) => {
    if (selectedGenders.includes(gender)) {
      // Remueve si ya está seleccionado
      setSelectedGenders(selectedGenders.filter(item => item !== gender));
    } else {
      // Agrega si no está seleccionado
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  const handleContinuar = () =>{
    handleSelectGenderBooks(selectedGenders);
    handleLevelReader();
  }

  return (
    <QuizPage>
      <div className='content-genderBooks'>
        <div>
          <p className="p1-quiz">¿Qué géneros te gustan más?</p>
          <p className="p2-quiz">No hay respuestas incorrectas, solo elige lo que más te guste.</p>
        </div>

        <div className='btns-genderBooks'>
          {genders.map((gender, index) => (
            <button
              key={index}
              className={selectedGenders.includes(gender) ? 'active-genderBooks' : ''}
              onClick={() => toggleGender(gender)}
            >
              {`${selectedGenders.includes(gender) ? '✔️' : ''} ${gender}`}
            </button>
          ))}
        </div>

        <button
          disabled={selectedGenders.length === 0}
          className={`btn-quiz ${selectedGenders.length > 0 ? 'btn-enabled' : 'btn-disabled'}`}
          onClick={handleContinuar}
        >
          Continuar
        </button>
      </div>
    </QuizPage>
  );
}

export default GenderBooks;