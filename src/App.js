import React from 'react';

export default function App() {
    return (
        <div>
            <h1>React Project</h1>
            <button
            onClick={
                () => {electron.notificationApi.sendNotification("hello!")}
            }
            >Click Me</button>
        </div>
    )
}