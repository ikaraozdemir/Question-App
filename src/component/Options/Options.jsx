import { useContext } from 'react';
import { QuestionContext } from '../../context/QuestionProvider.jsx';

function Options({ options }) {
  const { showOption, setShowOption } = useContext(QuestionContext);

  return (
    <div>
      <ul>
        {options.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Options;
