import React, { useTransition } from 'react';

function Transition() {
  const [isPending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(async () => {
      // Simulate a state update that takes time
      await new Promise(resolve => setTimeout(resolve, 2000));
      // You can update state here if needed
    });
  };

  return (
    <div>
      <div>
        useTransition in React is a hook that allows you to manage state transitions
        in a way that avoids blocking the main thread, improving the user experience
        during updates.
      </div>
      <button onClick={handleButton} disabled={isPending}>
        {isPending ? 'Loading...' : 'Click Me'}
      </button>
    </div>
  );
}




export default Transition;
