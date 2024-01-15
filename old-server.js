// https://rapidapi.com/guides/call-apis-in-express-via-node-fetch
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const dotenv = (...args) =>
    import('dotenv').then(({ default: fetch }) => fetch(...args));
// import dotenv from 'dotenv';

const express = require('express')
const app = express()
const port = 3000;

// hubitat config
hub = {
    host: '192.168.86.30',
    accessToken: '48e363b2-5c89-4efc-9533-d65f805c6088'
}

app.get('/', (req, res) => {
    res.send('Hellooo World!')
})

app.get('/devices', async (req, res) => {
    // res.send('Hellooo World!')

    const response = await fetch(`http://${hub.host}/apps/api/43/devices/33?access_token=${hub.accessToken}`);
    const data = await response.json();

    console.log(data);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, null, 3));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})