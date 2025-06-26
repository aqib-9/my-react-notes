// First we have to understand what an uncontrolled component is.
// it is a component that changes is state without the help of react or react state management.
// it is a component that does not use state to manage its data.
// it uses the DOM to manage its data.
import { useRef } from "react";
function UncontrolledComponent() {

    const textref = useRef(null); // Create a ref for the text input
    const passref = useRef(null); // Create a ref for the password input
    
    
    const handleForm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const text = document.getElementById('text').value; // Get the value of the text input
    const pass = document.querySelector('#pass').value;
    console.log(`Text: ${text}, Password: ${pass}`); // Log the values to the console

    }

    const handleFormWithRef = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const text = textref.current.value; // Get the value of the text input using ref
        const pass = passref.current.value; // Get the value of the password input using ref
        console.log(`Text: ${text}, Password: ${pass}`); // Log the values to the console
    }

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action='' method='post' onSubmit={handleForm} >
        <input type="text" id="text" placeholder="enter text" />
        <br></br>
        <input type="password" id="pass" placeholder="enter password" />
        <br></br>
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>

  <div>
      <h1>Uncontrolled Component using useRef</h1>
      <form action='' method='post' onSubmit={handleFormWithRef} >
        <input type="text" ref={textref} placeholder="enter text" />
        <br></br>
        <input type="password" ref={passref} placeholder="enter password" />
        <br></br>
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
      </div>

      </div>
  );
}

export default UncontrolledComponent;