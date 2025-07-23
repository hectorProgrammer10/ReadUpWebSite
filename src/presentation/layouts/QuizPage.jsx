import React from 'react'

import './QuizPage.css'

function QuizPage({children}) {
  return (
    <div className='estructure-quizPage'>
      <div>{children}</div>      
    </div>
  )
}

export default QuizPage
