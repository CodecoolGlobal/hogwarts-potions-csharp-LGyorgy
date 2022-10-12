const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "api/potions/**"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:44390',
        secure: false
    });

    app.use(appProxy);
};
