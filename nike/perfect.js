const{ObjectID} = require('mongodb');

var Promise = global.Promise;

const express = require('express');
const {mongoose} = require('./../live/monggose.js');
const bodyparser = require('body-parser');
const {Rom} = require('./../pole/entire.js');
var app = express();
const port = process.env.PORT || 3000;
app.use(bodyparser.json());
app.post('/todo',(req,res) =>
{
  var nody = new Rom({
    text : req.body.text
  })
  nody.save().then((doc) =>
{
  res.send(doc);
},(err) =>
{
  console.log(err);
})
})
app.get('/todo',(req,res) =>
{
 Rom.find().then((doc) =>
{
  res.send(doc);
},(err) =>
{
  console.log(err);
})
})



var app = express();
app.get('/todo/:id',(req,res) =>
{
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {

    res.status(400).send();
  }
  Rom.findById(id).then((doc) =>
{

  res.send({doc});
}).catch((e) =>
{
  res.status(400).send();
})
});

/*  Rom.findById(id).then((doc) =>
{
  if(!doc)
  {
    return res.status(404).send();
  }
  res.send({doc});
}).catch(e) => res.send(e);
})*/

app.listen(port,() =>
{
  console.log("odu");
})
module.exports = {app};
