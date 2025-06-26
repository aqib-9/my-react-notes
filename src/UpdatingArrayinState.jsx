import React from 'react';
function UpdateArray(){
    const [name, setArray] = React.useState([
        'John','Doe', 'Jane', 'Smith'
    ]);
    
    const updateArray = (val) => {
        name[name.length-1] = val;
        setArray([...name]); // This creates a new array with the updated value
    };
    
    return (
        <div>
        <h1>Updating Array in State</h1>
        <input type="text" onChange={(e)=>updateArray(e.target.value)}></input>
        {
            name.map((item, index) => (
                <h2 key={index}>{item}</h2>
            ))
        }
        </div>
    );
}

export default UpdateArray;