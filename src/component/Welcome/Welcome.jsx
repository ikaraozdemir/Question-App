import './Welcome.css';
import Questions from '../Questions/Questions.jsx';
import { useQuestionContext } from '../../context/QuestionProvider.jsx';

function Welcome() {
  
  const { showQuestionPage, setShowQuestionPage } = useQuestionContext();

  return (
    <>
      {showQuestionPage ? (<Questions/>) : 
      (
        <div className="welcome">
          <h1>Welcome</h1>
          <h3>With this fun and informative quiz, explore the most mysterious and fascinating places around the world. Each question will take you to a different geography, culture, or natural wonder. Along your journey, you'll test your knowledge and learn something new!</h3>
          <button id='start' onClick={() => setShowQuestionPage(true)}>Start</button>
        </div>
      )}
      
    </>
  );
}

export default Welcome;
