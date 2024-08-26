import { useState } from 'react'
import './App.css'
import QuestionProvider from './context/QuestionProvider'
import Questions from './component/Questions/Questions'


function App() {
  
  return (
    <QuestionProvider>
      <Questions/>
    </QuestionProvider>
  )
}

export default App
