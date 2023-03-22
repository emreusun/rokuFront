const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

// by default, you cant acces other websites or their internal contents
// if youare not part of that site (have the same origin). This is the default behaviour
// for the WEB - web spaces are like locked-down building.s you need special access to retrieve/use
// API's, services etc. The http-proxy-middleware library is like a swipe card that GIVES you
// that access with a bit of configuration - it tells the third party ( in this case our node 
// DB service) to allow you to retrieve data, use its services etc.

router.use('/', createProxyMiddleware({ 
    target: 'http://localhost:5050', 
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded '
    },
    changeOrigin: true,
}))

module.exports = router;