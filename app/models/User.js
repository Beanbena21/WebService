const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const slug = require('mongoose-slug-generator');
//const mongooseDelete = require('mongoose-delete');
//const AutoIncrement = require('mongoose-sequence')(mongoose)

//mongoose.plugin(slug);

const User = new Schema({
  //_id: { type: Sequelize.INTEGER, primaryKey: true},
  // first_name: {type: String, required: true, minLength: 0, maxLength: 255},
  // last_name: {type: String, required: true, minLength: 0, maxLength: 255},
  user_name: { type: String, required: true, minlength: 3  , maxlength: 255},
  user_password: { type: String, required: true, minLength: 8, maxLength: 1024},
  email: { type: String, required: true, minlength:6, maxlength: 255},
  //facebook: { type: String, maxlength: 255},
},{ versionKey: false, timestamps : true });


//Course.plugin(AutoIncrement)
//Soft Delete
//Course.plugin(mongooseDelete, {overrideMethods: 'all'})

module.exports = mongoose.model('User', User)