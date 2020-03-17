const { createProxyMiddleware } = require('http-proxy-middleware');

// Change this url to just env/api so it looks more clean
module.exports = (app) =>
    app.use(createProxyMiddleware('/api', { target: 'https://dog.ceo/', changeOrigin: true}));
