require('dotenv').config();

module.exports = {
    host: process.env.HOST,
    port: process.env.PORT,
    publicVapidKey: process.env.VAPID_PUBLIC_KEY,
    privateVapidKey: process.env.VAPID_PRIVATE_KEY,
    email: process.env.EMAIL
};