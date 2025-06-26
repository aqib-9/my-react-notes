import { useParams,Link,Outlet } from "react-router";

function UserDetail() {
    const { id } = useParams();
    const userData = [
        { id: 1, name: 'Aqib1' },
        { id: 2, name: 'Aqib2' },
        { id: 3, name: 'Aqib3' },
        { id: 4, name: 'Aqib4' }
    ];
    const user = userData.find(u => u.id === Number(id));


    return (
        <div>
            <h2>User Details</h2>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
        <h1><Link to='/'>Go Back to Home</Link></h1>
            <Outlet />
        </div>
    );
}

export default UserDetail;