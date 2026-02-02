const http = require('http');
const createApp = require('./app');

const PORT = 3000;

// Create app and server
const app = createApp();
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});