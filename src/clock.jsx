import { useState, useEffect } from "react";

function Clock( { color }) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            
            <h2 style={{color:color}}>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;