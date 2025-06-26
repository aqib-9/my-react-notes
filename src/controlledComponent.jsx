import React, { useState } from 'react';

function ControlledComponent() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // You can handle form submission here
    }

    function handleClear() {
        setText('');
        setPassword('');
        setEmail('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <hr />
                <input
                    type="password"
                    placeholder="enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <hr />
                <input
                    type="text"
                    placeholder="enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <hr />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear}>Clear</button>
                <h1>{text}</h1>
                <h1>{password}</h1>
                <h1>{email}</h1>
            </form>
        </div>
    );
}

export default ControlledComponent;