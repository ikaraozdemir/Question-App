import { useContext } from 'react';
import { QuestionContext } from '../../context/QuestionProvider.jsx';
import './Options.css'

function Options({ options }) {
  const { showOption, setShowOption } = useContext(QuestionContext);

  return (
    <div>
      <ul>
        {options.map((item, index) => (
          <div className='options'>
          <li key={index}>
            <input                     
              type="radio"
              name="question"
              value={item} />
            {item}
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Options;
