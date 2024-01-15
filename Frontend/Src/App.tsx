import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [responses, setResponses] = useState<string[]>([]);

  const clearMessage = ()=>{
   setResponses([]);
  }


  const sendMessage = async () => {
    try {
      const result = await axios.post('http://localhost:3333/chat/sendMessage', { text: inputText });
      console.log('Server Response:', result.data);
      setResponses([...responses, result.data]);
      setInputText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="App">
      <div className="ChatContainer">
        <div className="MessageWrapper">
          {responses.map((response, index) => (
            <div className="AIResponse" key={index}>
              {response}
            </div>
          ))}
        </div>
        <div className="InputWrapper">
          {inputText && <div className="UserResponse">{inputText}</div>}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
          />
          <button className='button-send' onClick={sendMessage}>Send</button>
          <button  className='button-clear' onClick={clearMessage}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
