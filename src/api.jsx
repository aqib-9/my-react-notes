import { useState, useEffect } from "react";
function Api_example() {

    const [userData, setUserData] = useState([])
    useEffect(() => {
        getUserData();
    }, [])

    async function getUserData() {
        const url = 'https://dummyjson.com/users'
        let response = await fetch(url)
        response = await response.json();
        setUserData(response.users)

    }
    return (
        <div>
            <h1>Api request</h1>
            {
                userData && userData.map((user) => (
                    <h1 key={user.id}>{user.phone}</h1>
                ))
            }

        </div>
    )
};

export default Api_example;