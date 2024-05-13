import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ limit, onTimeUpdate }) => {
    const [timeLeft, setTimeLeft] = useState(limit);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 1;
                if (newTime >= 0) {
                    return newTime;
                }
                clearInterval(timer);
                return 0;
            });
        }, 1000);

        // Call onTimeUpdate callback without triggering a state update in the parent component
        const intervalId = setInterval(() => {
            onTimeUpdate(timeLeft);
        }, 1000);

        return () => {
            clearInterval(timer);
            clearInterval(intervalId);
        };
    }, [limit, onTimeUpdate, timeLeft]);

    // Convert timeLeft to minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <span>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
    );
};

export default CountdownTimer;
