import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Json_server() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUserData();
    }, []);
    const url = 'http://localhost:3000/users';
    const navigate = useNavigate();
    async function getUserData() {

        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
    }
    async function delUserData(id) {

        let response = await fetch(url + '/' + id, {
            method: 'delete'
        });
        response = await response.json();
        if (response) {
            alert('deleted');
        }
        getUserData();
    }

    async function editUserData(id) {
        navigate('/edit/' + id)
    }

    return (
        <div>
            <h1>Json server example</h1>
            <table style={{
                borderCollapse: "collapse",
                width: "60%",
                margin: "20px auto",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}>
                <thead>
                    <tr style={{ background: "blue" }}>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Age</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Email</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData && userData.map((user) => (
                        <tr key={user.id}>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.name}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.age}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.email}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                                <button onClick={() => delUserData(user.id)}>Delete</button>
                                <button onClick={() => editUserData(user.id)} style={{ marginLeft: "8px" }}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Json_server;
