const express = require('express');
const prpl = require('prpl-server');
const compression = require('compression');
const app = express();

// compress all responses
app.use(compression())

// For each route check with the server (ETAG) if the resources change
// If not the browser will use the resource in from browser cache
// https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#defining_optimal_cache-control_policy
app.get(
  ["/", "/view*"],
  function ( request, response, next ) {
    response.set('Cache-Control', 'public, no-cache');
    next();
  }
);

let polyConfigFile = require("./build/polymer.json");
app.get('/*', prpl.makeHandler('./build',polyConfigFile));

// See more details here : https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
// Listen to the App Engine-specified port, or 80 otherwise
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Express + prpl-server app listening on port ${PORT}!`);
});