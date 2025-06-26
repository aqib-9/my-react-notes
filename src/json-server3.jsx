import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

function Json_server3() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Fetch user data by ID and populate fields
        async function fetchUser() {
            const res = await fetch(`http://localhost:3000/users/${id}`);
            if (res.ok) {
                const user = await res.json();
                setName(user.name || '');
                setAge(user.age || '');
                setEmail(user.email || '');
            }
        }
        fetchUser();
    }, [id]);

    const showName = async () => {
        const url = `http://localhost:3000/users/${id}`;
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, age, email })
        });
        response = await response.json();
        if (response) {
            alert('User updated');
            navigate('/'); // Go back to home or user list
        }
    };

    return (
        <div>
            <h1>Edit user</h1>
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

export default Json_server3;