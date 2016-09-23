var mongoose = require('mongoose'),
    crypto = require('crypto'),
    userModel = require('../models/User'),
    courseModel = require('../models/Course');
    

module.exports = function(config){
    mongoose.connect(config.db);
    mongoose.set('debug',true);
    var db = mongoose.connection;
    db.on('error',console.error.bind(console, 'Connection error...'));
    db.once('open',function callback(){
        console.log('multivision db opened');
    });
    
    userModel.createDefaultUsers();
    
    courseModel.createDefaultCourses();
}

