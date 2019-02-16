module.exports = {
  staticFileGlobs: [
    'src/**/*',
    'manifest.json',
    'images/shared/*',
    "images/favicon.ico"
  ],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest'
    }
  ]
};
