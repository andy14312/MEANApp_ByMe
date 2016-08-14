var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
function compile(str,path) {
    return stylus(str).set('filename',path);  
};
//we need environment variable to detect whether we're in development mode or production. For that we use node's env variable which is inside process
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var port = process.env.PORT = process.env.PORT || 3030;
app.set('views',__dirname+'/server/views');
app.set('view engine','jade');
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));

app.use(express.static(__dirname + '/public')); //to help express serve static files from our specified public folder
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
if(env === 'development') {
    mongoose.connect('mongodb://localhost/multivision');
} else {
    mongoose.connect('mongodb://anandm:multivision@ds153715.mlab.com:53715/mutlivision');   
}

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error...'));
db.once('open',function callback(){
    console.log('multivision db opened'); 
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message',messageSchema);
var mongoMessage;
Message.findOne().exec(function(err,messageDoc){
    mongoMessage = messageDoc.message;
});
app.get('/partials/:partialPath',function(req,res) {
   res.render('partials/'+req.params.partialPath); 
});

//if there's no route that's specified in our server which the client requests, we offer to show the index page of our app with this generic route
app.get('*',function(req,res){
    res.render('index',{
        mongoMessage: mongoMessage
    });
});
app.listen(port);
console.log('Listening on port number '+process.env.PORT+'...');