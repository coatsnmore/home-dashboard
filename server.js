import fetch from 'node-fetch';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const port = process.env.PORT || 7777;
const app = express()

// hubitat config
const hub = {
    host: process.env.HUB_HOST,
    accessToken: process.env.HUB_ACCESS_TOKEN
}

app.get('/', async (req, res) => {
    const devices = await getDevices();
    console.dir(devices, {depth: null});
    res.setHeader('Content-Type', 'text/html');
    res.end(summaryView(devices))
})

app.get('/devices', async (req, res) => {
    // const response = await fetch(`http://${hub.host}/apps/api/43/devices?access_token=${hub.accessToken}`);
    // const data = await response.json();
    const devices = await getDevices();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(devices, null, 3));
})

app.get('/devices/:deviceId', async (req, res) => {
    const response = await fetch(`http://${hub.host}/apps/api/43/devices/${req.params.deviceId}?access_token=${hub.accessToken}`);
    const data = await response.json();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, null, 3));
})

async function getDevices(){
    const devicesResponse = await fetch(`http://${hub.host}/apps/api/43/devices?access_token=${hub.accessToken}`);
    let devices = await devicesResponse.json();

    for (let i = 0; i < devices.length; i++) {
        let deviceMetrics = await fetch(`http://${hub.host}/apps/api/43/devices/${devices[i].id}?access_token=${hub.accessToken}`);
        let metrics = await deviceMetrics.json();
        devices[i].metrics = metrics.attributes;
    }

    return devices;
}

function metricsView(metrics){
    let view = '';
    metrics.forEach(metric => {
        view += metric.name
        view += ': '
        view += metric.currentValue
        view += '&nbsp;&nbsp;'
    });
    return view;
}

function summaryView(devices){
    let viewHeader = 
    `<html>
        <body>`;

    let viewFooter =
    `</body>
    </html>`

    let view = '';
    devices.forEach(device => {
        view += `
        <h2>${device.name}</h1>
        <ul>
            <li>Room: ${device.room}</li>
            <li>Type: ${device.type}</li>
            <li>Metrics: ${metricsView(device.metrics)}</li>
        </ul>
        `;
    });

    return `${viewHeader}${view}${viewFooter}`
}

app.get('/summary', async (req, res) => {
    const devices = await getDevices();
    console.dir(devices, {depth: null});
    res.setHeader('Content-Type', 'text/html');
    res.end(summaryView(devices))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}....`)
})