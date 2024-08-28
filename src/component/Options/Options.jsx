
import { useQuestionContext } from '../../context/QuestionProvider';
import './Options.css'

function Options({ currentQuestion }) {
  const { showOption,setSelectedOption,setScore, setWrongAnswer,setDetailedResult} = useQuestionContext();

  const handleSelected = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    if(currentQuestion.answer === selected) {
      setScore(prev => prev + 1)
      setDetailedResult((prev) => [...prev, {id:prev.length + 1, value:`True`}])
    } else if (currentQuestion.answer !== selected){
      setWrongAnswer(prev => prev + 1)
      setDetailedResult((prev) => [...prev, {id:prev.length + 1, value:`False`}])
    }
  }

  return (
    (showOption && 
    (<div>
      <ul>
        {currentQuestion.options.map((item) => (
          <div className='options' key={item}>
          <li >
            <input                     
              type="radio"
              name="question"
              value={item} onChange={handleSelected} />
            {item}
          </li>
          </div>
        ))}
      </ul>
    </div>)
    )
  );
}

export default Options;
