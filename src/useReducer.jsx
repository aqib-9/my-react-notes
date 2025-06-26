import { useReducer } from "react";

const emptyData = {
    name: "",
    email: "",
    city: "",
    pass: "",
    county: ""
};

function reducer(state, action) {
    if (action.type === "UPDATE_FIELD") {
        return { ...state, [action.field]: action.value };
    }
    return state;
}

function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, emptyData);

    return (
        <div>
            <h2>useReducer Form Example</h2>
            <input
                type="text"
                placeholder="Name"
                value={state.name}
                onChange={e => dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })}
            />
            <br />
            <input
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={e => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })}
            />
            <br />
            <input
                type="text"
                placeholder="City"
                value={state.city}
                onChange={e => dispatch({ type: "UPDATE_FIELD", field: "city", value: e.target.value })}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={state.pass}
                onChange={e => dispatch({ type: "UPDATE_FIELD", field: "pass", value: e.target.value })}
            />
            <br />
            <input
                type="text"
                placeholder="County"
                value={state.county}
                onChange={e => dispatch({ type: "UPDATE_FIELD", field: "county", value: e.target.value })}
            />
            <br /><br />
            <h3>Live Data:</h3>
            <ul>
                <li>Name: {state.name}</li>
                <li>Email: {state.email}</li>
                <li>City: {state.city}</li>
                <li>Password: {state.pass}</li>
                <li>County: {state.county}</li>
            </ul>
        </div>
    );
}

export default UseReducerExample;