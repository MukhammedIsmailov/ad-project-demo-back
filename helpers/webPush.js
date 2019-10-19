const webPush = require('web-push');
const { publicVapidKey, privateVapidKey, email } = require('../config/config');

exports.configureWebPush = () => {
    webPush.setVapidDetails({
        publicVapidKey,
        privateVapidKey,
        email
    });

    return webPush;
};
