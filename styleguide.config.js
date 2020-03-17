const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    title: "Custom Components - Styleguide",
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/components/StyleguideWrapper')
    },
    configureServer: (app) => {
        app.use(createProxyMiddleware('/api/**', {
            target: 'http://localhost:3000/',
            changeOrigin: true, // change host header to match to target's host
        }));
    },
    skipComponentsWithoutExample: true,
    sections: [
        {
            name: "Custom Components",
            components: "./src/components/**/[A-Z]*.js"
        }
    ],
    theme: {
        color: {
            sidebarBackground: "#efefef",
        },
        sidebarWidth: 300
    }
};
