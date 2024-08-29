
import { useQuestionContext } from '../../context/QuestionProvider';
import './Options.css'

function Options({ currentQuestion }) {
  const { showOption,setSelectedOption,setScore, setWrongAnswer,setDetailedResult,setQuestionState} = useQuestionContext();

  const handleSelected = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  
    // Doğru cevabı seçmişse
    if(currentQuestion.answer === selected) {
      setScore(prev => prev + 1);
      setQuestionState(true);
  
      // Detaylı sonuçlara 'True' ekle
      setDetailedResult(prev => [
        ...prev,
        { id: prev.length + 1, value: "True", correct: currentQuestion.answer }
      ]);
    } 
    // Yanlış cevabı seçmişse
    else {
      setWrongAnswer(prev => prev + 1);
      setQuestionState(false);
  
      // Detaylı sonuçlara 'False' ekle
      setDetailedResult(prev => [
        ...prev,
        { id: prev.length + 1, value: "False", correct: currentQuestion.answer }
      ]);
    }
  };
  

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
