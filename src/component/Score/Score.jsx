import { useQuestionContext } from "../../context/QuestionProvider"
import './Score.css'


function Score() {

  const {score, wrongAnswer,detailedResult,questions} = useQuestionContext();
  const emptyQuestions = questions.length - (score + wrongAnswer);

  return (
    <>
    <div className="short-score">
      <h3 style={{color:`green`}}>True: {score}</h3>
      <h3 style={{color:`red`}}>False: {wrongAnswer}</h3>
      <h3 style={{color:`yellow`}}>Empty: {emptyQuestions}</h3>
    </div>
    <ul className="detailed-score">
        {detailedResult.map((item) => (
          <div className='score-items' key={item.id}>
            <li >
              <div className="question-number">Q.{item.id}</div>
              <div>Your Answer: {item.userAnswer}</div>
              <div>Correct Answer: {item.correct}</div>
              <div style={{
                            color: item.value === "True" ? 'green' : 
                            item.value === "False" ? 'red' : 'yellow'  
                          }} >{item.value}</div>
              <br />
            </li>
          </div>
        ))}
      </ul>
    </>

  )
}
export default Score