const express = require('express');
const path = require('path');

const createApp = () => {
    const app = express();

    // Middleware
    app.use(express.json());
    app.set('views', path.join(__dirname, 'views'));
    app.use(express.static(path.join(__dirname, 'public')));

    // Routes
    app.get('/', (req, res) => {
        res.send('Welcome to Thai Treasures!');
    });

    return app;
}

module.exports = createApp;