import './Welcome.css';
import { useContext } from 'react';
import { QuestionContext } from '../../context/QuestionProvider.jsx';
import Questions from '../Questions/Questions.jsx';

function Welcome() {
  const { showQuestion, setShowQuestion } = useContext(QuestionContext);

  return (
    <div className="welcome">
      {showQuestion ? (
        <Questions />
      ) : (
        <>
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est laudantium vitae magnam earum alias atque, saepe nemo itaque dignissimos.</p>
          <button id='start' onClick={() => setShowQuestion(true)}>Start</button>
        </>
      )}
    </div>
  );
}

export default Welcome;
