let express = require('express');
let morgan = require('morgan');
let { createProxyMiddleware } = require('http-proxy-middleware');

let app = express();
let port = 3000;
let host = 'localhost';
let proxyHost = 'localhost';
let proxyPort = 8080;
let apiServiceUrl = "https://jsonplaceholder.typicode.com";

app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res, next) => {
    res.send('This is a proxy service which proxies to Billing and Account APIs.');
 });

 // Authorization
// app.use('', (req, res, next) => {
//     if (req.headers.authorization) {
//         next();
//     } else {
//         res.sendStatus(403);
//     }
//  });

 // Proxy endpoints
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: '',
    },
 }));

 // Start the Proxy
app.listen(port, host, () => {
    console.log(`Starting Proxy at ${host}:${port}`);
 });

