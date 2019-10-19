const webPush = require('web-push');
const { publicVapidKey, privateVapidKey, email } = require('../config/config');

exports.configureWebPush = () => {
    webPush.setVapidDetails(
        `mailto:${email}`,
        publicVapidKey,
        privateVapidKey
    );

    return webPush;
};
