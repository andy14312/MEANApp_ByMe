var Course = require('mongoose').model('Course');

exports.getCourses = function(req,res) {
    Course.find({}).exec(function(err,collection){
        if(err) {
            res.send(500);
        }
        res.send(collection);
    });
}