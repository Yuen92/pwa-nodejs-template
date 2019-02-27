module.exports = {
  staticFileGlobs: [
    "*/@webcomponents/webcomponentsjs/webcomponents-loader.js",
    "src/**/*",
    "manifest.json",
    "images/favicon.ico"
  ],
  runtimeCaching: [
    {
      urlPattern: /\/images\//,
      handler: 'fastest'
    },
    {
      urlPattern: /\/settings\/data/,
      handler: 'fastest'
    }
  ]
};
