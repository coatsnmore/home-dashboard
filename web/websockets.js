import { notifyMe } from './notifications.js';

const host = `192.168.86.29:7770`
const publishURL = `http://${host}/todos`;
const subscribeURL = `ws:/${host}/todos/ws`;
const events = document.getElementById('events');
const websocket = new WebSocket(subscribeURL);

// Publish button
document.getElementById("publishButton").onclick = () => {
    fetch(publishURL, {
        method: 'POST', // works with PUT as well, though that sends an OPTIONS request too!
        body: `It is ${new Date().toString()}. This is a testttt.`
    })
};

// Incoming events
websocket.onopen = () => {
    let event = document.createElement('div');
    event.innerHTML = `WebSocket connected to ${subscribeURL}`;
    events.appendChild(event);

    console.log(`WebSocket connected to ${subscribeURL}`);
};
websocket.onerror = (e) => {
    // let event = document.createElement('div');
    // event.innerHTML = `WebSocket error: Failed to connect to ${subscribeURL}`;
    // events.appendChild(event);
    console.log(`WebSocket error: Failed to connect to ${subscribeURL}`);
};
websocket.onmessage = (e) => {
    const {event} = JSON.parse(e.data);
    if(event === 'message'){
        notifyMe(e.data);
        let event = document.createElement('div');
        event.innerHTML = e.data;
        events.appendChild(event);
    }
};

