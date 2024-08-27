import './Welcome.css';
import Questions from '../Questions/Questions.jsx';
import { useQuestionContext } from '../../context/QuestionProvider.jsx';

function Welcome() {
  
  const { showQuestionPage, setShowQuestionPage } = useQuestionContext();

  return (
    <div className="welcome">
      {showQuestionPage ? (<Questions/>) : 

      (
        <>
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est laudantium vitae magnam earum alias atque, saepe nemo itaque dignissimos.</p>
          <button id='start' onClick={() => setShowQuestionPage(true)}>Start</button>
        </>
      )}
      
    </div>
  );
}

export default Welcome;
