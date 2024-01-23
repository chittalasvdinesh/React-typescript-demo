import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const intervalRef = useRef<number | null>(null);
    const [timer, setTimer] = useState(0)
    const stopTimer = () => {
        if(intervalRef.current) window.clearInterval(intervalRef.current)
    };

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])


    return <div>
        <h2>Timer-{timer}</h2>
        <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
}