> # [PWA Starter Kit fork](https://github.com/polymer/pwa-starter-kit)
> PWA Starter Kit is currently in development. It's on the fast track to a 1.0 release, so we encourage you to use it and give us your feedback, but there are things that haven't been finalized yet and you can expect some changes.
>
> See the list of Known Issues and TODOs, below, for updates.

# Sample App

This sample app is a starting point for building PWAs. Out of the box, the template
gives you the following features:
- all the PWA goodness (manifest, service worker)
- a responsive layout
- application theming
- using of [Redux for state management](https://pwa-starter-kit.polymer-project.org/redux-and-state-management/)
- offline UI with service workers using [sw-precache package](https://github.com/GoogleChromeLabs/sw-precache)
- simple routing solution
- fast time-to-interactive and first-paint through the PRPL pattern
- PRPL pattern application using [prpl-server as library](https://github.com/Polymer/prpl-server#as-a-library)
- unit and integrating testing starting points
- documentation about other advanced patterns.

## [PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
PRPL is a pattern for structuring and serving Progressive Web Apps (PWAs), with an emphasis on the performance of app delivery and launch. It stands for:
- Push critical resources for the initial URL route.
    - HTTP2/Server-Push using [prpl-server as library](https://github.com/Polymer/prpl-server#as-a-library)
- Render initial route.
    - Use the [app-shell model](https://developers.google.com/web/fundamentals/architecture/app-shell)
    - Use [Polymer Build](https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-json) to load the shell needed only
- Pre-cache remaining routes.
    - Use [sw-precache](https://github.com/GoogleChromeLabs/sw-precache) to cache in service worker
- Lazy-load and create remaining routes on demand
    - Use [Redux for state management](https://pwa-starter-kit.polymer-project.org/redux-and-state-management/) and lazy-load on navigation (action)

## [HTTP2/Server-Push](https://github.com/Polymer/prpl-server#as-a-library)
This app provide the server-push using :
- google app engine as a HTTP2 server
- [prpl-server as library](https://github.com/Polymer/prpl-server#as-a-library) to setup the server-push

## Redux for state management
[Redux](https://redux.js.org/) is a small state management container, that is view agnostic and widely used. It is centered around the idea of separating your application logic (the application state) from your view layer, and having the store as a single source of truth for the application state.


# TODOs

# Workaround for app-header for A2HS on iPhone
On the inline style of the <app-header> we must apply this style :
> transform: translateY(-50px);
> padding-top: 50px;

Replace in the file [app-header.js](https://github.com/PolymerElements/app-layout/blob/master/app-header/app-header.js) :
> this.translate3d(0, (-y) + 'px', 0);

by
> this.translate3d(0, (-y) -50 + 'px', 0);

In the same file [app-header.js](https://github.com/PolymerElements/app-layout/blob/master/app-header/app-header.js) add to the style :
> :host{}

this rules :
> padding-top: 50px;

To provide a pull-request for this improvement.

# Use link preload in service worker response

Modify the file "service-worker.js" in all build repository :
> /server/build/es5-bundled/service-worker.js

> /server/build/es6-bundled/service-worker.js

> /server/build/esm-bundled/service-worker.js

Replace (line 247):
> if (response) {

>   return response;

> }

by the content of the file 
> /hot_fix/service-worker-manual-change.js

Very pain full ! Fork the project [GoogleChromeLabs/sw-precache](https://github.com/GoogleChromeLabs/sw-precache) and provide a pull request to automated this based on the push-manifest.json file configuration from [Polymer/prpl-server#as-a-library](https://github.com/Polymer/prpl-server#as-a-library)

# Improvements

- [x] Remove Google domain dependency for fonts
> <script>window.polymerSkipLoadingFontRoboto = true;</script>

- [x] Fix app-drawer bug on iPhone when application used in standalone
- [ ] Pull request to do in [PolymerElements/app-layout](https://github.com/PolymerElements/app-layout) :
- [x] Use link preload when service worker should response
- [ ] Pull request to do in [GoogleChromeLabs/sw-precache](https://github.com/GoogleChromeLabs/sw-precache)
- [ ] Use the [navigation-preload](https://developers.google.com/web/updates/2017/02/navigation-preload) in service-worker
- [ ] Improve server-push to push resource based on viewport (mobile/desktop)
