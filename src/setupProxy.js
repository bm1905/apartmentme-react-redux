const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/api', { target: 'http://localhost:3001/'}))
    app.use(proxy('/*.svg', { target: 'http://localhost:3001/'}))
    app.use(proxy('/*.jpg', { target: 'http://localhost:3001/'}))
    app.use(proxy('/*.jpeg', { target: 'http://localhost:3001/'}))
    app.use(proxy('/*.png', { target: 'http://localhost:3001/'}))
}