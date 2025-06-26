// useId.jsx
// This file demonstrates the use of the useId hook in React.   
// The useId hook is used to generate unique IDs for elements in a React component.
// It is particularly useful for accessibility purposes, such as associating labels with form inputs.
// If we don't use the useId hook, we might end up with duplicate IDs in the DOM, which can cause issues with accessibility and functionality.
// For example, if we have multiple components that generate IDs without the useId hook, they might generate the same ID, leading to conflicts.
// in this example, we have two components that use the useId hook to generate unique IDs for their inputs.
// if we didn't use the useId hook, both components would generate the same ID, causing issues with accessibility and functionality.



import { useId } from "react";
function Use_IdHook() {
  const id = useId();
  return (
    <div>
      <h1>Use Id Hook</h1>
      <label htmlFor={id}>Your unique ID:</label>
      <input type="text" id={id} placeholder="This input has a unique ID" />
      <Use_IdHook2></Use_IdHook2>
    </div>
  );
}

function Use_IdHook2() {
  const id = useId();
  return (
    <div>
      <h1>Use Id Hook</h1>
      <label htmlFor={id}>Your unique ID:</label>
      <input type="text" id={id} placeholder="This input has a unique ID" />
    </div>
  );
}

export default Use_IdHook;