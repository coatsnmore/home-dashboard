import fetch from 'node-fetch';
import dotenv from 'dotenv';
import express from 'express';

const app = express()
const port = 3000;

dotenv.config();

// hubitat config
const hub = {
    host: process.env.HUB_HOST,
    accessToken: process.env.HUB_ACCESS_TOKEN
}

app.get('/', (req, res) => {
    res.send('Hellooo World!')
})

app.get('/devices', async (req, res) => {
    const response = await fetch(`http://${hub.host}/apps/api/43/devices/33?access_token=${hub.accessToken}`);
    const data = await response.json();

    console.log(data);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, null, 3));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})