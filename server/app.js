const express = require('express');
const prpl = require('prpl-server');
const compression = require('compression');
const app = express();

// compress all responses
app.use(compression())

// For each route check with the server (ETAG) if the resources change
// If not the browser will use the resource in from browser cache
// https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#defining_optimal_cache-control_policy
app.get(["/", "/view*", "/*html"],
  function ( request, response, next ) {
    response.set('Cache-Control', 'public, no-cache');
    next();
  }
);

app.get(["/*js","/*json","/*ico","/*png"],
  function ( request, response, next ) {
    // 60sec * 60min * 24hours *7days => 604800
    response.set('Cache-Control', 'max-age=604800');
    next();
  }
);

// Use prpl-server as library https://github.com/Polymer/prpl-server#as-a-library
let polyConfigFile = require("./build/polymer.json");
app.get('/*', prpl.makeHandler('./build',polyConfigFile));

// See more details here : https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
// Listen to the App Engine-specified port, or 80 otherwise
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Express + prpl-server app listening on port ${PORT}!`);
});