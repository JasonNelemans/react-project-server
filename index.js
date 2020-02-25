//import express
const express = require("express");

//express server
const app = express();

//handler function
function onRequest() {
  console.log("after request");
}

//port number
const port = 3000;

//confirmation function
function onListen() {
  console.log(`Listening on :${port}`);
}

//port starting listening
app.listen(port, onListen);
