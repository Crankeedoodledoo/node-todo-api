const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) - remove multiple items

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove

// Todo.findOneAndRemove({_id:'5909a2c85e7295ae42e56095'}).then((todo) => {
//   console.log(todo);
// });

//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5909a2c85e7295ae42e56095').then((todo) => {
  console.log(todo);
});
