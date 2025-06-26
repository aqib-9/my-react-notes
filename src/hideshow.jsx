import { useState } from "react"

function HideShow() {
    const [display, setDisplay] = useState(true);
    const [count, setCounter] = useState(0);
    return (
        <div>
            <h1>Hide and toggle tag</h1>
            <button onClick={() => setDisplay(!display)}>Hide/Show</button>
            {
                display ? <h1>Aqib</h1> : null
            }

            <h1>{count}</h1>
            <button onClick={() => setCounter(count + 1)}>Click</button>
            {
                count == 0?<h3>zero</h3>
                :count == 1?<h3>one</h3>
                :count == 2?<h3>two</h3> 
                :count == 3?<h3>three</h3> 
                :count == 4?<h3>four</h3>
                :null  
            }

        </div>
    )
}
export default HideShow;