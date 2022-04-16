const { default: axios } = require('axios');
const User = require('../models/user');

exports.getAddUser = (req, res, next) => {
  res.render('admin/edit-user', {
    pageTitle: 'Add User',
    path: '/user/add-user',
    editing: false
  });
};
exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  User.create({
    name: name,
    age: age,
    email: email
  })
    .then(result => {
      res.json(result);
      // console.log(result);
      // console.log('Created User');
      // res.redirect('/user/users');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
     res.json(users);
      // res.render('shop/user-list', {
    //     prods: users,
    //     pageTitle: 'Users',
    //     path: '/user/users'
    //  });
    })
    .catch(err => console.log(err));
};

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then(user => {
      res.json(user);
      // res.render('shop/user-detail', {
      //   user: user,
      //   pageTitle: 'User',
      //   path: '/user/users'
      // });
    })
    .catch(err => console.log(err));
};


exports.postDeleteUser= (req, res, next) => {
  const userId = req.body.userId;
  User.findByPk(userId)
    .then(user => {
      return user.destroy();
    })
    .then(result => {
      console.log('DESTROYED USER');
      res.redirect('/user/users');
    })
    .catch(err => console.log(err));
};





