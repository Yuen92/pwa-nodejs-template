module.exports = {
  staticFileGlobs: [
    "*/@webcomponents/webcomponentsjs/webcomponents-loader.js",
    'src/**/*',
    'manifest.json',
    'images/shared/*',
    "images/favicon.ico"
  ],
  runtimeCaching: [
    {
      urlPattern: /\/settings\/data/,
      handler: 'fastest'
    }
  ]
};
