import { useQuestionContext } from "../../context/QuestionProvider"
import './Score.css'


function Score() {

  const {score, wrongAnswer,detailedResult,questions} = useQuestionContext();
  const emptyQuestions = questions.length - (score + wrongAnswer);

  return (
    <>
    <div style={{color:`green`}}>True: {score}</div>
    <div style={{color:`red`}}>False: {wrongAnswer}</div>
    <div style={{color:`yellow`}}>Empty: {emptyQuestions}</div>
    <br />
    <ul className="ull">
        {detailedResult.map((item) => (
          <div className='score-items' key={item.id}>
            <li >
              <br />
              <div className="question-number">Q.{item.id}</div>
              <div style={{
    color: item.value === "True" ? 'green' : 
           item.value === "False" ? 'red' : 
           'yellow' 
  }} >{item.value}</div>
              <div>Correct Answer: {item.correct}</div>
              <br />
            </li>
          </div>
        ))}
      </ul>
    </>

  )
}
export default Score