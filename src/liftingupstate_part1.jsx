function Lift_1({setUser}){
    return (
        <div>
            <h1>Parent</h1>
            <input type="text" onChange={e => setUser(e.target.value)} placeholder="Enter text here" />
            <hr></hr>
        </div>
    )
}
export default Lift_1;