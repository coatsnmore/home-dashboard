import { notifyMe } from './notifications.js';

const host = `192.168.86.247:8888`
const publishURL = `http://${host}/todos`;
const subscribeURL = `ws:/${host}/todos/ws`;
const events = document.getElementById('events');
const websocket = new WebSocket(subscribeURL);

// Publish button
document.getElementById("publishButton").onclick = () => {
    fetch(publishURL, {
        method: 'POST', // works with PUT as well, though that sends an OPTIONS request too!
        body: `It is ${new Date().toString()}. This is a test.`
    })
};

// Incoming events
websocket.onopen = () => {
    let event = document.createElement('div');
    event.innerHTML = `WebSocket connected to ${subscribeURL}`;
    events.appendChild(event);
};
websocket.onerror = (e) => {
    let event = document.createElement('div');
    event.innerHTML = `WebSocket error: Failed to connect to ${subscribeURL}`;
    events.appendChild(event);
};
websocket.onmessage = (e) => {
    notifyMe(e.data);
    let event = document.createElement('div');
    event.innerHTML = e.data;
    events.appendChild(event);
};

