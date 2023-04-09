const express = require("express");
const server = new express();
const cors = require("cors");
const bodyParser = require("body-parser");
const formidable = require("formidable");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

server.post("/person", (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    console.log("fields: ", fields);
    console.log("files: ", files);
    res.send({ success: true });
  });
});
server.get('/people',(req,res)=>{
  
})
server.listen(8080, () => {
  console.log("listning on port");
});
