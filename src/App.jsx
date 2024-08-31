import './App.css'
import QuestionProvider from './context/QuestionProvider'
import Welcome from './component/Welcome/Welcome'

function App() {


  return (
    <QuestionProvider>
    <Welcome/>
    </QuestionProvider>
  )
}

export default App
