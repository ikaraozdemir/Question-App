import { useQuestionContext } from "../../context/QuestionProvider"


function Score() {

  const {score, wrongAnswer,detailedResult,questions} = useQuestionContext();
  const emptyQuestions = questions.length - (score + wrongAnswer);

  return (
    <>
    <div>True: {score}</div>
    <div>False: {wrongAnswer}</div>
    <div>Empty: {emptyQuestions}</div>
    <br />
    <ul>
        {detailedResult.map((item) => (
          <div className='options' key={item.id}>
          <li >
            <div>{item.id}</div>
            <br />
            <div>{item.value}</div>
          </li>
          </div>
        ))}
      </ul>
    </>

  )
}
export default Score