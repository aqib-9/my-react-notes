// subject.jsx
import React, { useContext } from "react";
import { SubjectContext } from "./context";

function Subject() {
    const subject = useContext(SubjectContext);
    return (
        <div>
            <h2>Subject Component</h2>
            <p>Subject is: <strong>{subject}</strong></p>
        </div>
    );
}

export default Subject;
