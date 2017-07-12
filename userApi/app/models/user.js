let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let UserSchema   = new Schema({
    roles : {type: 'String'},
    userName : {type : 'String',unique: true, required:true},
    name: {type : 'String'},
    email: {type : 'String',unique:true,required:true},
    password: String,

});

module.exports = mongoose.model('User', UserSchema);
