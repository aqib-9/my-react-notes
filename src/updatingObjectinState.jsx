import { useState } from 'react';
function UpdateObject(){
    const [student,setStudent] = useState({
        name: 'John',
        address: {
            city: 'New York',
            state: 'NY'
        }
    });

    function handleNameChange(val) {
        student.name = val;
        setStudent({...student});
    }
    const  handleCityChange = (val)=> {
        student.address.city = val;
        setStudent({...student});
    }
    return(
        
        <div>
            <h1>Updating object using State </h1>
            <h2>Student Name: {student.name}</h2>
            <h2>City: {student.address.city}</h2>
            <h2>State: {student.address.state}</h2>
            <input type="text" onChange={(e)=>handleNameChange(e.target.value)} placeholder="changeName"></input>
            <input type="text" onChange={(e)=>handleCityChange(e.target.value)} placeholder="changeCity"></input>

        </div>
    )
}

export default UpdateObject;