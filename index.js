const express = require('express');
const users = require('./routes/users')
const path = require('path');
const passport = require('passport');
const {gitHub} = require('./config/passport');
const gitAuth = require('./config/gitAuth');
const flash = require('connect-flash');
//init app
const app = express();




app.use(express.static(path.join(__dirname, 'public')));

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(flash());

app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});





app.use(passport.initialize());
app.use(passport.session());




const authRouts = require('./routes/auth');

app.use('/auth', authRouts);
app.use('/', users);


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


    //Start the server
const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log('Sever started on port ' + port);
})
