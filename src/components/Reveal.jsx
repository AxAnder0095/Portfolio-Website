import { RandomReveal } from "react-random-reveal";
import { useEffect, useRef, useState } from "react";

export const Reveal = ({ word, pauseMs = 10000, updateInterval = 0.05 }) => {
    const [key, setKey] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <RandomReveal
            key={key}
            isPlaying={true}
            duration={2}
            characters={word}
            characterSet={['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']}
            updateInterval={updateInterval}
            onComplete={() => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }

                timeoutRef.current = setTimeout(() => {
                    setKey(prev => prev + 1);
                }, pauseMs);
            }}
        />
    )
}