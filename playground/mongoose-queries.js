const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '590209694909c418d04e8c8f';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not found');
// }
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5900b91a008d750be0156ed1';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));
