import { useState } from "react"

function Counter(){
    const [count, setCounter] = useState(0);
    const [text, setText] = useState('Nothing');
    const [inputValue, setInputValue] = useState('');

    function handleTextChange() {
        setText(inputValue);
    }

    return(
        <div>
            <h1>{text}</h1>
            
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={handleTextChange}>Change Text</button>

            <h1>{count}</h1>
            <button onClick={() => setCounter(count + 1)}>Click</button>
        </div>
        


    )
}

export default Counter;
