var mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error',console.error.bind(console, 'Connection error...'));
    db.once('open',function callback(){
        console.log('multivision db opened');
    });
    
    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        userName: String
    });
    var User = mongoose.model('User',userSchema);
    User.find({}).exec(function(err,collection){
        if(collection.length === 0) {
            console.log('here too yo');
            User.create({firstName: 'Anand',lastName: 'Mutyala',userName: 'through_stacks'});
            User.create({firstName: 'Rishabh',lastName: 'Verma',userName: 'rver'});
            User.create({firstName: 'Kunal',lastName: 'Shekhar',userName: 'kshek'});
        }
    })
}