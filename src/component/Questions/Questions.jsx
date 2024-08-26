import questions from '../../../public/questions.js';
import { useContext } from 'react'
import { QuestionContext } from '../../context/QuestionProvider.jsx';
import Options from '../Options/Options.jsx';



function Questions() {
  const {showQuestion,setShowQuestion } = useContext(QuestionContext);


  return (
    <div>
        {questions.map((item,index) => (
        <ul key={index}>
            <li >
            {item.question}
            <Options options={item.options} />
            </li>
        </ul>
        ))}
        
    </div>
  )
}
export default Questions