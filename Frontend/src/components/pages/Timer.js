import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ limit, onTimeUpdate }) => {
    const [timeLeft, setTimeLeft] = useState(limit);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 1;
                if (newTime >= 0) {
                    onTimeUpdate(newTime); // Update the time in the parent component
                    return newTime;
                }
                clearInterval(timer);
                return 0;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [limit, onTimeUpdate]);

    // Convert timeLeft to minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <span>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
    );
};

export default CountdownTimer;
