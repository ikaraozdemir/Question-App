import { useEffect, useState } from 'react';
// import questions from '../../../public/questions.js';
import Options from '../Options/Options.jsx';
import './Questions.css';
import { useQuestionContext } from '../../context/QuestionProvider.jsx';

function Questions() {

  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const {
    setShowOption,
    setSelectedOption,
    showOption,selectedOption,questions
  } = useQuestionContext();

  const currentQuestion = questions[currentQuestionIndex];


  useEffect(() => {
    const displayQuestion = () => {
      setShowQuestion(true);
      setShowOption(false);

      setTimeout(() => {
        setShowOption(true);
      }, 400); 
    };

    displayQuestion(); 

    const interval = setInterval(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        displayQuestion();
      } else {
        clearInterval(interval);
      }
    }, 10000);

    return () => clearInterval(interval);

  }, [currentQuestionIndex]);


  useEffect(() => {
    if (selectedOption !== null && (currentQuestionIndex < questions.length - 1) ) {

      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    }
  }, [selectedOption]);
  

  return (
    <div className='questions'>
      {showQuestion && (
        <ul key={currentQuestionIndex}>
          <li>
            <h2>{`Q.${currentQuestionIndex + 1}`}</h2>
            <img src={currentQuestion?.media} alt={`question${currentQuestionIndex}`} />
            <br />
            <div className='question'>
              <h3>{currentQuestion.question}</h3>
              <div className='line'></div>
              {showOption && <Options options={currentQuestion.options} />}
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Questions;
