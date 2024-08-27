
import { useQuestionContext } from '../../context/QuestionProvider';
import './Options.css'

function Options({ options }) {
  const { showOption,setSelectedOption } = useQuestionContext();

  const handleSelected = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
   
  }

  return (
    (showOption && 
    (<div>
      <ul>
        {options.map((item) => (
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
