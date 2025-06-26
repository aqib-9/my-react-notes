// university.jsx
import React from "react";
import College from "./college";
import { SubjectContext } from "./context";

function University() {
    const subject = "Computer ";
    return (
        <SubjectContext.Provider value={subject}>
            <div>
                <h1>University Component</h1>
                <College />
            </div>
        </SubjectContext.Provider>
    );
}

export default University;
