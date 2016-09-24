var auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    users = require('../controllers/users'),
    courses = require('../controllers/courses');
module.exports = function(app) {
  app.get('/partials/*',function(req,res) {
//    console.log(req.params[0]);
     res.render('../../public/app/'+req.params[0]);
  });

    //route to get all the users based on user authentication
    app.get('/api/users',auth.requiresRole('admin'),users.getUsers);
    //route to post new user created
    app.post('/api/users',users.createUser);
    app.put('/api/users',users.updateUser);
    app.get('/api/courses',courses.getCourses);
    //this route with course id as paramenter is not required as we are getting all the courses at once and selecting the course from them
    //app.get('/api/courses/:id',courses.getCourseById);
//if there's no route that's specified in our server which the client requests, we offer to show the index page of our app with this generic route
    app.post('/login',auth.authenticate);
    //app.post('/login',auth.authenticate); Even this works the same way! HOW????
    app.post('/logout',function(req,res){
        req.logout(); // passport module has added this 'logout' function
        res.end();
    });
    app.all('/api/*',function(req,res){
       res.send(404);
    })
    app.get('*',function(req,res){
        res.render('index',{
            bootstrappedUser: req.user
        });
    });

}
