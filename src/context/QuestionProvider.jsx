import { Children, createContext, useContext, useState } from 'react';
import questions from '../../public/questions.js';


const QuestionContext = createContext();

export const useQuestionContext = () => useContext(QuestionContext);

function QuestionProvider({children}) {
    const [score, setScore] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [showQuestionPage, setShowQuestionPage] = useState(false);
    const [showOption, setShowOption] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

  return (
    <QuestionContext.Provider value = {{score, setScore,wrongAnswer,setWrongAnswer,showOption,setShowOption,showResult,setShowResult,selectedOption, setSelectedOption,showQuestionPage,setShowQuestionPage,questions}}>
        {children}
    </QuestionContext.Provider>
  )
  
}
export default QuestionProvider;
export {QuestionContext};