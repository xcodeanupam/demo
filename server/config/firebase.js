var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyByLwo93OMO6mIalucwJvyyiD8ewd6KBzI",
  authDomain: "blog-9d300.firebaseapp.com",
  databaseURL: "https://blog-9d300.firebaseio.com",
  projectId: "blog-9d300",
  storageBucket: "blog-9d300.appspot.com",
  messagingSenderId: "229793449421",
  appId: "1:229793449421:web:4c41127f885241fd47f084",
  measurementId: "G-N87P105ZZ6"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;