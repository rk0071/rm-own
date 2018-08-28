const {Rom} = require('./../pole/entire.js');
const{ObjectID} = require('mongodb');
const {mongoose} = require('./../live/monggose.js');
var Promise = global.Promise;


const express = require('express');
var app = express();
app.get('/todo/:id',(req,res) =>
{
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
    return console.log("invalid")
    res.status(400).send();
  }

  rom.findById(id).then((town) =>
{
  if(!town)
  {
    return res.status(404).send();
  }
  res.send({town});
}).catch(e) => res.send(e);
})

app.listen(3000,() =>
{
  console.log("odu");
})
