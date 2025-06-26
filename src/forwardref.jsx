function Forwardref(props) {
    return(
        <div>
            <input type="text" ref={props.ref} />
            <button onClick={props.handleref}>Submit</button>
        </div>
    )
}

export default Forwardref;