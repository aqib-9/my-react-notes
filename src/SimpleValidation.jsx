import { useState } from "react";

function Simple_validation() {
    const [name, setname] = useState('');
    const [errname, seterrname] = useState('');

    const [pass, setpass] = useState('');
    const [errpass, seterrpass] = useState('');

    const setusername = (val) => {
        setname(val);
        if (val.length > 5) {
            seterrname('Error: name must be less than 5 characters');
        } else {
            seterrname('');
        }
    };

    const setpassword = (val) => {
        setpass(val);
        // Regex for special characters
        if (/[^a-zA-Z0-9]/.test(val)) {
            seterrpass('Error: password must not contain special characters');
        } else {
            seterrpass('');
        }
    };

    return (
        <div>
            <h1>Simple Validation</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setusername(e.target.value)}
                placeholder="enter Name"
            />
            {errname && <p>{errname}</p>}
            <br />
            <input type="text" value={pass} onChange={(e)=>setpassword(e.target.value)} placeholder="enter Pass" />
            {errpass && <p>{errpass}</p>}
            <br />
            <button disabled={errname || errpass} onClick={() => alert("Submitted")}>Submit</button>
        </div>
    );
}

export default Simple_validation;