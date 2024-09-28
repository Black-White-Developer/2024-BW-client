const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://idea-bank.kro.kr/api",
            changeOrigin: true
        })
    );
};