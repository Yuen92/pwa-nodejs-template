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


## TODOs
### Workaround for app-header for A2HS on iPhone
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

### Workaround failed - Fix fonts.googleapis.com dependency from paper-styles used by paper-item
Replace [font-roboto](https://github.com/PolymerElements/font-roboto) by [font-roboto-local](https://github.com/PolymerElements/font-roboto-local)
Install [font-roboto-local](https://github.com/PolymerElements/font-roboto-local) :
> npm install --save @polymer/font-roboto-local

In the file [typography.js](https://github.com/PolymerElements/paper-styles/blob/master/typography.js) comment :
> //import '@polymer/font-roboto/roboto.js';

and add :
> import '@polymer/font-roboto-local/roboto.js';

In the file [paper-styles/.../package.json](https://github.com/PolymerElements/paper-styles/blob/master/package.json) change dependancy, replace :
> "@polymer/font-roboto": "^3.0.1",

by :
> "@polymer/font-roboto-local": "^3.0.2",

Related to this open issue : [Remove roboto dependency from paper-styles](https://github.com/PolymerElements/paper-styles/pull/128#issuecomment-447400852)

### Use Template Style
### Load icons needed only - remove import '@polymer/iron-icons/iron-icons.js';
