import { Routes, Route, Navigate } from "react-router";
import Navbar from "./navbar";
import Home from "./Home";
import About from "./About";
import Setting from "./setting";
import CollegeNavbar from "./CollegeNavbar";
import Student from "./Student";
import Course from "./Course";
import Year from "./Year";
import Users from "./Users";           // fix import name
import UserDetail from "./UserDetail";

function ReactExample() {
    return (
        <div>
            <h1>React Router Example</h1>
            <p>This is a simple example of using React Router.</p>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/about" element={<About />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/users" element={<Users />} />
                    
                </Route>

                <Route path="/users/:id" element={<UserDetail />} />

                <Route path="/college" element={<CollegeNavbar />}>
                    <Route path="student" element={<Student />} />
                    <Route path="course" element={<Course />} />
                    <Route path="year" element={<Year />} />
                    <Route index element={<h2>Please select an option above.</h2>} />
                </Route>

                <Route path="*" element={<Navigate to="/user/about" />} />
            </Routes>
        </div>
    );
}

export default ReactExample;
