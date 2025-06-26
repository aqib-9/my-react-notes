import { useState } from "react";

function DerivedState() {
  const [user, setuser] = useState('');
  const [users, setusers] = useState([]);

 

  function handleUserChange() {
    
    
      setusers([...users, user]);
      setuser(''); 
    
  }
  

  return (
    <div>
        <h2>Total User: {users.length}</h2>
        <h2>Last User: {users[users.length-1]}</h2>
        <h3>Unique User:{[...new Set(users)].length}</h3>
      <h1>Derive State</h1>
      <input
        type="text"
        value={user}                     
        onChange={(event) => setuser(event.target.value)}
        placeholder="Enter text here"
      />
      <button onClick={handleUserChange}>Submit</button>
      {
        users.map((user, index) => (
          <h1 key={index}>{user}</h1>
        ))
      }
    </div>
  );
}

export default DerivedState;
