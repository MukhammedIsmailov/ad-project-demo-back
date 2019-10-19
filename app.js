const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('./config/config');
const { configureWebPush } = require('./helpers/webPush');

const app = express();

app.use(bodyParser.json({ type: 'application/*+json' }));

app.post('/subscribe', (req, res) => {

    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: "Push Test" });

    const webPush = configureWebPush();

    webPush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));

    res.send(config.VAOIDPrivateKey);
});

app.listen(port, () => {
    console.log('Start server!');
});
