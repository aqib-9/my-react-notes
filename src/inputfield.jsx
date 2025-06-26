import { useState } from "react";
function InputField(){
    const [inputValue, setInputValue] = useState('Aqib');
    return(
        <div>
            <h1>{inputValue}</h1>
            <input
                type="text"
                placeholder="Enter text here"
                value={inputValue} // <-- add this line
                onChange={e => setInputValue(e.target.value)}
            />
            <br />
            <br />
            <button onClick={()=>setInputValue('')}>Clear</button>
        </div>
    )
}
export default InputField;