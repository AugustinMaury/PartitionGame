import React, { useEffect, useRef } from 'react';

const ServerReader = ({ setData }) => {
    const websocketRef = useRef(null);

    useEffect(() => {
        if (!websocketRef.current) {
            websocketRef.current = new WebSocket("ws://localhost:8001/");

            const handleMessage = ({ data }) => {
                const event = JSON.parse(data);
                console.log(event);
                setData(event);
            };

            websocketRef.current.addEventListener("message", handleMessage);

            websocketRef.current.addEventListener("close", () => {
                console.log("WebSocket connection closed");
                websocketRef.current = null;
            });
        }
    }, [setData]);

    return (
        <div>
        </div>
    );
};

export default ServerReader;
