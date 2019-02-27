// Public module
const express = require('express');
const prpl = require('prpl-server');
const compression = require('compression');
const cacheControl = require('express-cache-controller');
const datastore = require('./library/datastore.js');

// Project module
const api = require('./api/json-request.js');

const app = express();

// compress all responses
app.use(compression())

// Always check with the server (ETAG) if the resources change
// If not the browser will use the resource in from browser cache
// https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#defining_optimal_cache-control_policy
app.use(cacheControl({
  noCache: true
}));

/*******************************************************************************
 * Datas Stuff wich use datastore
 ******************************************************************************/
app.get(["/settings/datas"],
  function ( request, response, next ) {
    new api(request, response).serveResponse();
  }
);


/*******************************************************************************
 * Cache Policy
 ******************************************************************************/
app.get(["/*.html","/*.js","/*.json","/*.ico","/*.png","/*.jpg","/*.webp","/*hint"],
  function ( request, response, next ) {
    // WebPageTest Recommandation : 60sec * 60min * 24hours * 7days => 604800
    // Google PageSpeed Insights Recommandation on desktop : 60sec * 60min * 24hours * 365days => 31536000
    response.cacheControl = {
      noCache: false,
      maxAge: 31536000
    };
    next();
  }
);

app.get(["/",
        "/home",
        "/settings",
        "/settings/app-install",
        "/settings/load-screens",
        "/counter",
        "/shopping"],
  function ( request, response, next ) {
    // 60sec * 60min * 24hours *7days => 604800
    response.cacheControl = {
      noCache: false,
      maxAge: 604800
    };
    next();
  }
);

/*******************************************************************************
 * Front-end Routes
 ******************************************************************************/
// For each route check with the server (ETAG) if the resources change
// If not the browser will use the resource in from browser cache
// https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#defining_optimal_cache-control_policy
app.get(["/*service-worker.js"],
  function ( request, response, next ) {
    response.set('Cache-Control', 'public, no-cache, max-age=0');
    next();
  }
);

app.get(["/esm-bundled/service-worker-min.js"],
  function ( request, response, next ) {
    response.set('Service-Worker-Allowed', '/');
    response.set('Content-Type', 'application/javascript; charset=UTF-8');
    var url = "build" + request.url;
    response.sendFile(url , { root : __dirname});
  }
);

/*******************************************************************************
 * SEO Stuff
 ******************************************************************************/
app.get(["/robots.txt"],
  function ( request, response, next ) {
    response.set('Content-Type', 'text/plain; charset=UTF-8');
    response.sendFile(request.url , { root : __dirname});
  }
);

app.get(["/sitemap.xml"],
  function ( request, response, next ) {
    response.set('Content-Type', 'application/xhtml+xml; charset=UTF-8');
    response.sendFile(request.url , { root : __dirname});
  }
);

// Use prpl-server as library https://github.com/Polymer/prpl-server#as-a-library
let polyConfigFile = require("./build/polymer.json");
app.get('/*', prpl.makeHandler('./build', polyConfigFile));

// See more details here : https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
// Listen to the App Engine-specified port, or 80 otherwise
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Express + prpl-server app listening on ${PORT}!`);
});