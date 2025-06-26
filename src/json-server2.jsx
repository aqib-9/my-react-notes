import { useState } from "react";

function Json_server2() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const showName = async () => {
        const url = 'http://localhost:3000/users';
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, age,email }),
        });
        response = await response.json();
        if (response) {
            alert('New user added');
            setName('');
            setAge('');
            setEmail('');
        }
    };

    return (
        <div>
            <h1>Add new users</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
            />
            <br />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
            />
            <br />
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
            />
            <br />
            <button onClick={showName}>Submit</button>
        </div>
    );
}

export default Json_server2;