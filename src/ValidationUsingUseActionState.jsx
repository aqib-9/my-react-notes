import { useActionState } from "react";

function UseActionValidation() {

    const handleLogin = (prevData, formData) => {
        let name = formData.get("name");
        let pass = formData.get("pass");

        if (name.length > 5) {
            return { error: "Name must not be more than 5 characters." };
        }
        if (/[^a-zA-Z0-9]/.test(pass)) {
            return { error: "Password must not contain special characters." };
        }
        return { success: `Login successful! Name: ${name}, Pass: ${pass}` };
    };

    const [data, action, pending] = useActionState(handleLogin);

    return (
        <div>
            <h1>Validation Using UseActionState Hook</h1>
            <form action={action}>
                <input type="text" name="name" placeholder="enter name" />
                <br />
                <input type="text" name="pass" placeholder="enter pass" />
                <br />
                <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
            </form>
            {data?.error && (
                <p style={{ color: "red", marginTop: "10px" }}>{data.error}</p>
            )}
            {data?.success && (
                <p style={{ color: "green", marginTop: "10px" }}>{data.success}</p>
            )}
        </div>
    );
}

export default UseActionValidation;