var auth = require('./auth');
module.exports = function(app) {
  app.get('/partials/*',function(req,res) {
//    console.log(req.params[0]);
     res.render('../../public/app/'+req.params[0]); 
  });

//if there's no route that's specified in our server which the client requests, we offer to show the index page of our app with this generic route
    app.get('*',function(req,res){
        res.render('index');
    });  
    app.post('/login',auth);
    //app.post('/login',auth.authenticate); Even this works the same way! HOW????
}
