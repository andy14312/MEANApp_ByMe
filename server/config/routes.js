var passport = require('passport');
module.exports = function(app) {
  app.get('/partials/*',function(req,res) {
//    console.log(req.params[0]);
     res.render('../../public/app/'+req.params[0]); 
  });

//if there's no route that's specified in our server which the client requests, we offer to show the index page of our app with this generic route
    app.get('*',function(req,res){
        res.render('index');
    });  
    app.post('/login',function(req,res,next){
        var auth = passport.authenticate('local',function(err,user){
            if(err) {
                return next(err);
            }
            if(!user) {
                res.send({success:false});
            }
            req.logIn(user,function(err){
               if(err) {
                   return next(err);
               } 
                res.send({success:true,user:user});
            });
        });
        auth(req,res,next);
    });
}
