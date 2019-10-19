const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('./config/config');
const { configureWebPush } = require('./helpers/webPush');

const app = express();

app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {

    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: "Push Test", body: "Hello World!", icon: 'https://img8.apk.tools/150/b/d/1/com.abdallah_abdelazim.helloworld.png' });

    const webPush = configureWebPush();

    webPush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));
});

app.listen(port, () => {
    console.log('Start server!');
});
