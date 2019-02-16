const envBack = require('../dev_config/back.js');
const settingsData = require('../data/settings.json');

class JSONRequest {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    setHeaders() {
        // During development to manage front hot reload we must serve front and back on different IP
        // front : 127.0.0.1
        // back : 127.0.0.2
        // In production all resources are served by the same hostname
        var originRequest = this.req.get('origin');
        if (originRequest == "http://" + envBack.frontHostname) {
            this.res.setHeader("Access-Control-Allow-Origin", originRequest);
        }
        this.res.setHeader("Content-Type", "application/json");
    }

    serveResponse() {
        this.setHeaders();
        this.res.send(settingsData);
    }
}

module.exports = JSONRequest;