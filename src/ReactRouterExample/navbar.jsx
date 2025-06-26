import { NavLink, Outlet } from "react-router";
import "./navbar.css";

function Navbar() {
    return (
        <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user/about">About</NavLink>
            <NavLink to="/setting">Setting</NavLink>
            <NavLink to="/users">Users</NavLink>

            <NavLink to="/college">College</NavLink>
        </nav>
        <Outlet />
        </div>
    );
}

export default Navbar;