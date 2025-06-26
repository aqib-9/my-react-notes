// useActionStateHook is a custom hook that uses the useActionState hook from react to manage form submission state.
// It handles form submission, manages loading state, and displays success or error messages based on the form input.
// It is used to demonstrate how to handle form actions in a React application using the useActionState hook.
// It is a simple form with two fields: text and password. When the form is submitted, it simulates a delay and checks if both fields are filled.
// If successful, it returns a success message; otherwise, it returns an error message.
import { useActionState } from "react";
function UseActionStateHook(){
  const handleSubmit = async (previousData, formData) => {
    const name = formData.get('text');
    const pass = formData.get('pass');

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    console.log(name, pass);

    if (name && pass) {
      return { success: true, message: "Form submitted successfully!", name, pass };
    }else{
        return { success: false, error: "Please fill in all fields.", name, pass  };
    }

};

    const [data,action,pending] = useActionState(handleSubmit,undefined)
    return(
        <div>
            <h1>Use Action State Hook</h1>
            <form action={action}>
                <input type="text" defaultValue={data?.name} name="text" placeholder="Enter text here" />
                <br></br>
                <input type="password" name="pass" placeholder="Enter password here" />
                <br></br>
                <button disabled={pending} type="submit">Submit</button>
                <br></br>
                {
                    data?.error && <span style={{color: 'red'}}>{data.error}</span>
                }
                {
                    data?.message && <span style={{color: 'green'}}>{data.message}</span>
                }
            </form>
            <h2>name : {data?.name}</h2>
            <h2>pass : {data?.pass}</h2>
            
        </div>
    )
};

export default UseActionStateHook;