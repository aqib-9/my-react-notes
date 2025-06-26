import { Link } from "react-router";

function Users() {
    const userData = [
        { id: 1, name: 'Aqib1' },
        { id: 2, name: 'Aqib2' },
        { id: 3, name: 'Aqib3' },
        { id: 4, name: 'Aqib4' }
    ];

    return (
        <div>
            <h1>User Lists</h1>
            {userData.map((item) => (
                <div key={item.id}>
                    <h4>
                        <Link to={`/users/${item.id}`}>{item.name}</Link>
                    </h4>
                </div>
            ))}
        </div>
    );
}

export default Users;