import questions from '../../../public/questions.js';
import { useContext } from 'react'
import { QuestionContext } from '../../context/QuestionProvider.jsx';
import Options from '../Options/Options.jsx';
import './Questions.css'

function Questions() {
  const {showQuestion,setShowQuestion } = useContext(QuestionContext);

  return (
    <div className='questions'>
        {questions.map((item,index) => (
        <ul key={index}>
            <li >
              <h2>{`Q.${index + 1}`}</h2>
            <img src={item.media} alt={`question${index}`} />
            <br/>
            <div className='question'>
              <h3>{item.question}</h3> 
              <hr />
              <br />
              <Options options={item.options} />
            </div>
            

            </li>
        </ul>
        ))}
        
    </div>
  )
}
export default Questions