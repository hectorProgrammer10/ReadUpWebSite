import React from 'react'
import { useState, useRef, useEffect } from 'react';

import './Age.css'

import QuizPage from '../layouts/QuizPage'

function Age({handleGender}) {
  const [selectedAge, setSelectedAge] = useState(null);
  const ageRefs = useRef({});
  


  const ages = [];
  for(let i=5; i<=100; i++){
    ages.push(i);
    ageRefs.current[i] = React.createRef();
  }

   useEffect(() => {
    if (selectedAge && ageRefs.current[selectedAge]) {
      ageRefs.current[selectedAge].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedAge]);

  const handleContinuar = () =>{
    handleGender();
  }

  return (
    <QuizPage>
      <div className='content-age'>
        <div>
          <p className='p1-quiz'>¿Cuántos años tienes?</p>
          <p className='p2-quiz'>Dejanos saber tu edad para poder personalizar cosas solo para ti</p>
        </div>
        <div className="age-carousel-container">
          <div className="age-carousel">
            {ages.map((age, index) => (
              <div key={age} ref={ageRefs.current[age]} className={`age-item ${selectedAge == age ? 'active' : ''}`}
              onClick={() => setSelectedAge(age)}
              >
                {age}
                

              </div>
            ))}
          </div>
        </div>

        <button
          disabled={!selectedAge}
          className={`btn-quiz ${selectedAge ? 'btn-enabled' : 'btn-disabled'}`}
          onClick={handleContinuar}
        >
          Continuar
        </button>


      </div>
    </QuizPage>
  )
}

export default Age
