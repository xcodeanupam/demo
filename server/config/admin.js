
var admin = require("firebase-admin");

var serviceAccount = require("./keyfile.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blog-9d300.firebaseio.com"
});

module.exports = admin;