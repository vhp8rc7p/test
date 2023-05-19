import {charCountState,textState} from './recoil/atoms/state'
import { useRecoilState,useRecoilValue } from 'recoil';
import Feature from './Feature';

export default function Feedback({score}) {
    const count = useRecoilValue(charCountState);
    const [text, setText] = useRecoilState(textState);

    
    const handleChange = (event) => {
      setText(event.target.value);
    };
    return (
      <div className='feedback'>
        <h6>What can we do to make your experience more satisfying?</h6>
        <textarea maxLength={300} value={text} onChange={handleChange} />
        <div id="the-count">
          <span id="current">{count}</span>
          <span id="maximum">/ 300</span>
        </div>
        <Feature score={score}></Feature>
      </div>
    )
  }