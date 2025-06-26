import { Link, Outlet } from "react-router";
import "./navbar.css";

function CollegeNavbar() {
    return (
        <div>
            <nav>
                <Link to="student">Student</Link>
                <Link to="course">Course</Link>
                <Link to="year">Year</Link>
                
            </nav>
            <h1><Link to='/'>Go Back to Home</Link></h1>
            <Outlet />
        </div>
    );
}

export default CollegeNavbar;