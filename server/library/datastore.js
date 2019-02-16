// See https://cloud.google.com/docs/authentication/production
// Imports the Google Cloud client library
const {Datastore} = require('@google-cloud/datastore');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
const datastore  = new Datastore({
  projectId: require('../config/project.json').GCLOUD_PROJECT,
  keyFilename: require('../config/project.json').KEY_FILE,
});

exports.createRootKey = function (namespace, kind, id) {
  return datastore.key({
    namespace: namespace,
    path: [kind, id]
  });
};

exports.createChildKey = function (namespace, path, kind, id) {
  path.push(kind, id);
  return datastore.key({
    namespace: namespace,
    path: path
  });
};