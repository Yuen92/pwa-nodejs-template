// During development to manage front hot reload we must serve front and back on different IP
// front : 127.0.0.1
// back : 127.0.0.2
// So below stuff needed by the back to manage the CORS policy during local development
// In production all resources are served by the same hostname so no CORS policy problem

// Way to use it :
// const envBack = require('../dev_config/back.js');
// var originRequest = this.req.get('origin');
// if (originRequest == "http://" + envBack.frontHostname) {
//     this.res.setHeader("Access-Control-Allow-Origin", originRequest);
// }

exports.frontHostname = "127.0.0.1";