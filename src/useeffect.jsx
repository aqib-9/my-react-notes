import React, { useState, useEffect } from 'react';
function Use_effect(){

    const [count, setCount] = useState(0);
    const [data, setdata] = useState(0);
    function handleCountChange() {
        console.log(`Count changed to: ${count}`);
    }
    // handleCountChange();                  // This will called every time when i click button to fix this we have to use useEffect 


  useEffect(() => {
        handleCountChange();
    }, []); // now this will only run once when the component mounts
    // If you want to run it every time count changes, you can pass count as a dependency
    // useEffect(() => {
    //     handleCountChange();
    // }, [count]); // This will run every time count changes
    useEffect(() => {
        handleCountChange();
    }, [data]) // This will run every time data changes
    return(
        <div>
            <h1>useEffect</h1>

            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>{data}</h2>
            <button onClick={() => setdata(data + 1)}>Increment</button>
        </div>
    )
}

export default Use_effect;