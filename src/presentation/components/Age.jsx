import React from 'react'
import { useState, useRef, useEffect } from 'react';

import './Age.css'

import QuizPage from '../layouts/QuizPage'

function Age() {
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

  return (
    <QuizPage>
      <div className='content-age'>
        <div>
          <p style={{color:'#1B3F9A', fontSize:'2rem', textAlign:'center'}}>¿Cuántos años tienes?</p>
          <p style={{textAlign:'center'}}>Dejanos saber tu edad para poder personalizar cosas solo para ti</p>
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

        <button id='btn-age'>Continuar</button>

      </div>
    </QuizPage>
  )
}

export default Age
