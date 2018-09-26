const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/test');

const userScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: String
});

const User = mongoose.model('user', userScheme);

// User.collection.drop();

// User.create({ name: 'Jush', address: 'Krasnoyarsk', phone: 'none' }).then(console.log)

// User.find({ name: "Jush" })

module.exports = {
  User
};
