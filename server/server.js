require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/1234324
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  // Validate id using isValid
  if (!ObjectID.isValid(id)) {
    //console.log('ID not found');
    //404 - send back empty send
    return res.status(404).send();
  }

 // findById
 Todo.findById(id).then((todo) => {
   if (!todo) {
 //     return console.log('Id not found');
   //if no todo - send back 404 with empty body
       return res.status(404).send();
   }
   // success
     // if todo -send it back
   res.send({todo});
   // error
    // 400 - and send empty body back
 }).catch((e) => {
   res.status(404).send();
 });
});

app.delete('/todos/:id', (req,res) => {
  //get the id
  var id = req.params.id;

  //validate the id -> not valid? return 404
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  //remove todo by id
  Todo.findByIdAndRemove(id).then((todo) => {
    //success
      //if no doc, send  404
    if (!todo) {
      return res.status(404).send();
    }
    //if doc, send doc back with 200
    res.send({todo});

    //console.error
      //400 with empty body
  }).catch((e) => {
    res.status(400).send();
  });
});

//update todo items
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  //store updates - set properties user can update(text, completed)
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
