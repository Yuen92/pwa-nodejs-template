if (response) {
    /* clone response to provide link preload header */
    if(/index.html/.test(response.url)){
    /* clone response to provide link preload header */
      var component = "view404";
      // map with the logic in src/actions/app.js
      switch(true){
        case /https?:\/\/[^\/]*\/?((\/\?|#).*|)$/i.test(event.request.url):
          var component = "home";
          break;
        case /https?:\/\/[^\/]*\/home((\?|#).*|)$/i.test(event.request.url):
          var component = "home";
          break;
        case /https?:\/\/[^\/]*\/settings((\?|#).*|)$/i.test(event.request.url):
          var component = "settings";
          break;
        case /https?:\/\/[^\/]*\/settings\/app-install((\?|#).*|)$/i.test(event.request.url):
          var component = "settings/app-install";
          break;
        case /https?:\/\/[^\/]*\/settings\/app-install\/help-a2hs-android-windows((\?|#).*|)$/i.test(event.request.url):
          var component = "staging";
          break;
        case /https?:\/\/[^\/]*\/settings\/app-install\/help-a2hs-ios((\?|#).*|)$/i.test(event.request.url):
          var component = "staging";
          break;
        case /https?:\/\/[^\/]*\/settings\/load-screens((\?|#).*|)$/i.test(event.request.url):
          var component = "settings/load-screens";
          break;
        case /https?:\/\/[^\/]*\/counter((\?|#).*|)$/i.test(event.request.url):
          var component = "counter";
          break;
        case /https?:\/\/[^\/]*\/shopping((\?|#).*|)$/i.test(event.request.url):
          var component = "shopping";
          break;
        case /https?:\/\/[^\/]*\/view404((\?|#).*|)$/i.test(event.request.url):
          var component = "view404";
          break;
        default:
          break;
      }
      var init = {
        status: response.status,
        statusText: response.statusText,
        headers: {
          "link" : "<" + response.url.replace(/https?:\/\/[^\/]\//,"/").replace(/index.html.*/,"src/components/my-app.js") + ">; rel=preload; as=script; crossorigin=anonymous ,<" + response.url.replace(/https?:\/\/[^\/]\//,"/").replace(/index.html.*/,"src/components/my-" + component + ".js") + ">; rel=preload; as=script; crossorigin=anonymous,<" + response.url.replace(/https?:\/\/[^\/]\//,"/").replace(/index.html.*/,"node_assets/@webcomponents/webcomponentsjs/webcomponents-loader.js") + ">; rel=preload; as=script; crossorigin=anonymous"
        }
      };
      response.headers.forEach(function(v,k){
        init.headers[k] = v;
      });

      return response.text().then(function(body){
          return new Response(body, init);
      });
    }
    /* clone response to provide link preload header */
    return response;
  }