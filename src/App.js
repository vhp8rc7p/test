import './App.css';
import { useRecoilState } from 'recoil';
import { scoreState } from './recoil/atoms/state';
import Feedback from './Feedback';

function Rate() {
  const [score, setScore] = useRecoilState(scoreState)
  const handleClick = (value) => {
    setScore(value);
  };
  return (
    <div className='rate'>
      <h6>On a scale from 0 to 10 how likely are you to recommend us to a friend or colleague?</h6>
      <span>Very unlikely</span>
      <ul className='rating-bar'>
        {Array.from({ length: 11 }, (_, index) => (
          <li
            key={index}
            className={`rating-star ${index + 1 === score ? 'active' : ''}`}
            onClick={() => handleClick(index + 1)}
          >
            <a>{index}</a>
          </li>
        ))}
      </ul>
      <span>Very likely</span>
    </div>
  )
}

function App() {
  const [score, setScore] = useRecoilState(scoreState)
  return (

    <div className='flex'>
      <main className='container'>
        <Rate></Rate>
        <br></br>
        <Feedback score={score}></Feedback>
      </main>
    </div>

  );
}

export default App;
