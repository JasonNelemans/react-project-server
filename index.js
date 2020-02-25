//import express
const express = require("express");

//express server
const app = express();

//handler function
function onRequest() {
  console.log("after request");
}

//register GET / hello endpoint
app.get(
  "/page", //route to listen
  (request, response) => {
    response.send("Hello client"); //sending datas
  }
);

//port number
const port = 3000;

//port starting listening
app.listen(port, () => console.log(`Listening on :${port}`));
