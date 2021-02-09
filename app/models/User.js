const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const slug = require('mongoose-slug-generator');
//const mongooseDelete = require('mongoose-delete');
//const AutoIncrement = require('mongoose-sequence')(mongoose)

//mongoose.plugin(slug);

const User = new Schema({
  //_id: { type: Sequelize.INTEGER, primaryKey: true},
  user_name: { type: String, minlength: 3  , maxlength: 255, required: true},
  user_password: { type: String, maxLength: 1024, required: true},
  //email: { type: String, maxlength: 255 },
  //facebook: { type: String, maxlength: 255},
},{ versionKey: false }, {timestamps : true });


//Course.plugin(AutoIncrement)
//Soft Delete
//Course.plugin(mongooseDelete, {overrideMethods: 'all'})

module.exports = mongoose.model('User', User)