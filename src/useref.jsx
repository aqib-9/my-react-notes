import { useRef } from "react";

function UseRef() {
    const inputref = useRef(null);
    const pararef = useRef(null);

    const inputHandler = () => {
        if (inputref.current) {
            inputref.current.focus();
            inputref.current.value = "Hello";
            inputref.current.style.backgroundColor = "lightblue";
            inputref.current.style.marginLeft = "20px";
        }
    };

    const toggleHandler = () => {
        if (inputref.current) {
            if (inputref.current.style.display === "none") {
                inputref.current.style.display = "block";
            } else {
                inputref.current.style.display = "none";
            }
        }
    };

    const paraHandler = () => {
            pararef.current.style.color = "red";
            pararef.current.style.fontSize = "20px";
            pararef.current.style.fontWeight = "bold";
            pararef.current=null
        }

    return (
        <div>
            <h1>Use of useref in react</h1>
            <p>UseRef is a hook that allows you to directly access a DOM element or store a mutable value that does not cause re-renders when changed.</p>
            <p>It is often used for accessing DOM elements, managing focus, or storing values that need to persist across renders without triggering a re-render.</p>
             <div>
            <input type="text" placeholder="Type something..." ref={inputref} />
            </div>
            <div><button onClick={inputHandler}>Focus & Style Input</button></div>
            <div><button onClick={toggleHandler}>Toggle Input Visibility</button></div>
            <p ref={pararef}>hello World</p>
            <div><button onClick={paraHandler}>Change para color</button></div>
        </div>
    );
}

export default UseRef;