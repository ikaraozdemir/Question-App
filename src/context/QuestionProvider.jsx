import { Children, createContext, useState } from 'react';

const QuestionContext = createContext();

function QuestionProvider({children}) {
    const [score, setScore] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);
    const [showOption, setShowOption] = useState(false);
    const [showResult, setShowResult] = useState(false);

  return (
    <QuestionContext.Provider value = {{score, setScore,wrongAnswer,setWrongAnswer,showQuestion,setShowQuestion,showOption,setShowOption,showResult,setShowResult}}>
        {children}
    </QuestionContext.Provider>
  )
  
}
export default QuestionProvider;
export {QuestionContext};